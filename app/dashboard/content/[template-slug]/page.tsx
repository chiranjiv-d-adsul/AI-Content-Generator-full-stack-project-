'use client'
import React, { useContext } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateList";
import Templates from "@/app/(data)/Template";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/AiModal";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";


interface PROPS {
  params: {
    "template-slug": string;
  };
}

function CreateNewContent(props: PROPS) {

  const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug === props.params["template-slug"]);
  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAiOutput] = React.useState<string>("");
  const {user} = useUser();
  const {updatCreditUsage,setUpdateCreditUsage}= useContext(UpdateCreditUsageContext)


  /**
   * Used to generate content from Ai
   * @param formData
   * @returns
   */

  const GenerateAIContent=async (formData:any)=>{
    setLoading(true);

    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData)+" "+SelectedPrompt;

    const result= await chatSession.sendMessage(FinalAIPrompt);

    console.log(result.response.text());
    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setLoading(false);
    setUpdateCreditUsage(Date.now())

  }

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result= await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/YYYY')


    });
    console.log(result);
  }
  return (
    <div className="p-5">
      <Link className="text-primary" href="/dashboard">
      <Button> <ArrowLeft/> Back</Button>
      </Link>

    <div className="grid grid-cols-1  md:grid-cols-3 gap-5 p-5">
      {/* FormSection */}
      <div>
        <FormSection  selectedTemplate={selectedTemplate}
        userFormInput={(v:any) => GenerateAIContent(v)}
        loading={loading}/>

      </div>
      {/* Output Section */}
      <div className="col-span-2">
        <OutputSection  aiOutput={aiOutput}/>
      </div>
    </div>
    </div>
  )
}

export default CreateNewContent;
