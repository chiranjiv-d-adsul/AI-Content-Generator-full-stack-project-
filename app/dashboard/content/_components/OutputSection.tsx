import React, { useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useRef } from 'react';

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className='inset-0 bg-white shadow-lg border rounded-lg relative z-0'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button
          onClick={() => navigator.clipboard.writeText(aiOutput)}
          className='flex gap-2'>
          <Copy className='w-4 h-4' /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your content is here"
        initialEditType="wysiwyg"
        height="500px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;
