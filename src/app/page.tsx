import Link from "next/link";
import { global } from "styled-jsx/css";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from"@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";


export default function Home() {
  return ( 
    
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </main>
    
  );
}