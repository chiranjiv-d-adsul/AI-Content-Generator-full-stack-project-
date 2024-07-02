'use client'

import { SignUp, useUser } from "@clerk/nextjs";

export default function Page() {
  const { user } = useUser();

  // If user is already authenticated, redirect to dashboard
  if (user) {
    window.location.href = "/dashboard";
    return null; // Optionally, you can return null or a loading indicator here
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
}
