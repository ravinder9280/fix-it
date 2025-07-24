import PromptGeneratorForm from '@/components/prompt-generator-form';

const PromptGeneratorPage = () => {
  return (
    <div className='flex flex-col w-full max-w-7xl mx-auto gap-8'>
      <div className='flex text-center flex-col gap-2'>
        <h2 className=' text-2xl md:text-3xl font-bold'>Generate AI Prompts with FIX-IT AI Prompt Generator</h2>
        <p className='text-muted-foreground text-sm  md:text-base '>
          Fix-IT AI Prompt Generator is a tool that helps you generate AI prompts, create high-quality prompts and take full advantage of AI tools like ChatGPT.
        </p>
      </div>
      <PromptGeneratorForm />
    </div>
  );
};

export default PromptGeneratorPage;