'use client'

import Image from "next/image";
import HeroSection from "@/components/Hero-section";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import withAuthRedirect from '../components/withAuthRedirect';
import Footer from "@/components/Footer";
import Header from "@/components/Header";


function Home() {
  return (
    <main>
        <Header />
        <div id='/'>

      <HeroSection />
        </div>
      <div id='about'>

      <Content  />
      </div>
      <div id='feature'>

      <Feature />
      </div>
      <div id='contact'>

      <Contact />
      </div>
      <Footer />
    </main>
  );
}

export default withAuthRedirect(Home);
