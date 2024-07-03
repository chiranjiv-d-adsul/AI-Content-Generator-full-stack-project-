import { useRouter } from "next/router";
import React, { useCallback } from "react";

const HeroSection = () => {


  return (
    <section className="relative text-gray-600 body-font bg-gradient-to-b from-blue-100 to-gray-100">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          src="/images/hero.png"
          alt="AI Content Generator"
          className="w-80 h-80 object-cover object-center rounded-full mb-10 shadow-2xl"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 leading-tight">
            Welcome to AI Content Generator
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            Revolutionize your content creation with our AI-powered generator.
            Whether you need blog posts, social media updates, or creative
            writing, our AI can do it all. Save time and enhance your productivity
            with just a few clicks. Experience the future of content generation today.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              // onClick={handleLogin}
              className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              <a href="/sign-in">
              Login
              </a>
            </button>
            <button

              // onClick={handleRegister}
              className="inline-flex text-white bg-green-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-600 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              <a href="/sign-up">
              Register
              </a>
            </button>
          </div>
        </div>
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full h-16 text-white transform translate-y-1/2"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0l1200 120L0 120z"></path>
      </svg>
    </section>
  );
};

export default HeroSection;