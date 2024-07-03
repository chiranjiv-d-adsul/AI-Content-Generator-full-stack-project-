import React from "react";

const Content = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Benefits of Using Our AI Content Generator
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
            Discover the transformative benefits our AI content generator offers for your content creation process.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
              <div className="transform transition duration-500 hover:scale-105 border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-2xl bg-white">
                <div className={`w-12 h-12 inline-flex items-center justify-center rounded-full ${benefit.bgColor} ${benefit.textColor} mb-4`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h2 className="text-xl text-gray-900 font-semibold title-font mb-2">
                  {benefit.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg  transition duration-500 transform hover:scale-110">
          Learn More
        </button>
      </div>
    </section>
  );
};

const benefits = [
  {
    title: "Increased Efficiency",
    description: "Significantly reduce the time and effort required to create high-quality content.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    title: "Cost-Effective Solution",
    description: "Save on costs by eliminating the need for extensive manual content creation.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    title: "Improved Quality",
    description: "Ensure consistent, high-quality content that meets your standards every time.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    title: "Enhanced Creativity",
    description: "Unleash your creativity with tools that inspire and facilitate innovative content.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    title: "Greater Flexibility",
    description: "Adapt your content quickly to changing needs and trends with ease.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    title: "Comprehensive Support",
    description: "Benefit from extensive support and resources to help you get the most out of our tool.",
    icon: (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
];

export default Content;
