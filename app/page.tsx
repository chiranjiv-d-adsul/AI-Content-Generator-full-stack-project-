'use client'

import Image from "next/image";
import HeroSection from "@/components/Hero-section";
import Content from "@/components/Content";
import Feature from "@/components/Feature";
import Contact from "@/components/Contact";
import withAuthRedirect from '../components/withAuthRedirect';

function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Feature />
      <Contact />
    </main>
  );
}

export default withAuthRedirect(Home);
