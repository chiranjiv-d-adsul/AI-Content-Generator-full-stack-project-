// Contact.tsx

import React from "react";
import ContactForm from "./Form";
import { ReactNode } from "react";

const Contact = () => {

  const HeroPattern = ({ pttrn, children }: { pttrn: string, children: ReactNode }) => (
    <div className={pttrn}>
      {children}
    </div>
  );

  return (
    <section className="relative text-gray-600 body-font pt-20 pb-4 bg-gray-100">
        <HeroPattern pttrn="topography-pattern">
        <div className="container mx-auto flex flex-col items-center p-10 justify-center">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-4xl font-bold title-font mb-4 text-gray-900">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
              Reach out to us with any questions or inquiries. We're here to help!
            </p>
          </div>
          <div className="w-full lg:w-1/2 md:w-2/3 bg-white rounded-lg p-8 flex flex-col shadow-md">
            <ContactForm />
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                href="mailto:adsulchiranjiv958@gmail.com"
                className="text-indigo-500 hover:underline transition duration-300"
              >
                Chiranjiv D Adsul
              </a>
              <p className="leading-normal my-5 text-gray-700">
                17 Adsul D.
                <br />
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </div>
    </HeroPattern>
      </section>
  );
};

export default Contact;
