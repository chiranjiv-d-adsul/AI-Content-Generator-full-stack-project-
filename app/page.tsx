"use client"

// pages/index.js
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/sign-up'); // This will navigate to the Clerk sign-up page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Content Generator</h1>
      <p className="text-xl mb-8">Generate your content in a sec.</p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </button>
    </div>
  );
}
