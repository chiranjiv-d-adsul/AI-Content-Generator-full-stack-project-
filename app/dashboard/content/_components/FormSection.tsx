'use client'
import React from 'react'
import { TEMPLATE } from '../../_components/TemplateList'
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput:any
  loading:boolean
}



function FormSection({selectedTemplate, userFormInput, loading}:PROPS) {

  const [formData,setFormData]=React.useState();


  const handleInputChange=(e:any)=>{
    const {name,value}=e.target;
    setFormData((prev:any)=>({
      ...prev,
      [name]:value
    }))
  }

  const onSubmit=(e:any)=>{
    e.preventDefault()
    userFormInput(formData)
  }
  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} width={70} height={70} alt={selectedTemplate?.name}/>
      <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
      <p className='text-sm text-gray-500'>{selectedTemplate?.desc}</p>
      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item,index)=>(
          <div key={index} className='mu-2 flex flex-col gap-2 mb-7'>
            <label className='block text-sm  text-gray-700 font-bold'>{item.label}</label>
            {item.field === 'input' ? <Input name={item.name} required={item?.required}
            onChange={handleInputChange} />
            :item.field== 'textarea'? <Textarea  name={item.name} required={item?.required}
            onChange={handleInputChange} />:null}
            </div>
        ))}
        <Button type='submit' className='w-full py-6'
        disabled={loading}
        > {loading && <Loader2Icon className='animate-spin mr-2'/>}
          Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection
