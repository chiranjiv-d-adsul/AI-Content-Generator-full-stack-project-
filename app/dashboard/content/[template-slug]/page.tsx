'use client';
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
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params["template-slug"]);
  const [loading, setLoading] = React.useState(false);
  const [aiOutput, setAiOutput] = React.useState<string>("");
  const { user } = useUser();
  const { updatCreditUsage, setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);

  /**
   * Used to generate content from Ai
   * @param formData
   * @returns
   */
  const GenerateAIContent = async (formData: any) => {
    setLoading(true);

    if (!selectedTemplate) {
      console.error('Selected template is undefined');
      setLoading(false);
      return;
    }

    const SelectedPrompt = selectedTemplate.aiPrompt;
    const FinalAIPrompt = JSON.stringify(formData) + " " + SelectedPrompt;

    try {
      const result = await chatSession.sendMessage(FinalAIPrompt);

      const responseText = await result.response.text();
      console.log(responseText);

      setAiOutput(responseText);

      await SaveInDb(JSON.stringify(formData), selectedTemplate.slug, responseText);

      setLoading(false);
      setUpdateCreditUsage(Date.now());
    } catch (error) {
      console.error('Error generating AI content:', error);
      setLoading(false);
    }
  };

  const SaveInDb = async (formData: string, slug: string, aiResp: string) => {
    if (!user || !user.primaryEmailAddress || !user.primaryEmailAddress.emailAddress) {
      throw new Error('User email address is not available');
    }
    const email = user.primaryEmailAddress.emailAddress;

    try {
      const result = await db.insert(AIOutput).values({
        formData: formData, // Ensure formData is a string
        templateSlug: slug,
        aiResponse: aiResp,
        createdBy: email,
        createdAt: moment().format('YYYY-MM-DD'), // Use ISO format for date
      });
      console.log(result);
    } catch (error) {
      console.error('Error saving in DB:', error);
    }
  };

  return (
    <div className="p-5">
      <Link className="text-primary" href="/dashboard">
        <Button> <ArrowLeft /> Back</Button>
      </Link>

      <div className="grid grid-cols-1  md:grid-cols-3 gap-5 p-5">
        {/* FormSection */}
        <div>
          <FormSection selectedTemplate={selectedTemplate}
            userFormInput={(v: any) => GenerateAIContent(v)}
            loading={loading} />
        </div>
        {/* Output Section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
