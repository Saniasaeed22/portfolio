import React from "react";
import styles from './Hero.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button"



const Hero= () =>{
    return(
<div id="hero" className="min-h-screen bg-no-repeat bg-[url(/hero11.png)] 
bg-right lg:bg[45%] md:bg[25%] sm:bg[15%]bg-cover bg-black"
style={{backgroundSize:"35%"}}>
    
    <div className= " container mx-auto px-4 py-10 text-white">
        <div className="flex flex-col gap-[40px] "></div>
        <div className="font-bold">
        <p className="text-sm">Hello I Am</p>
        <h1 className="text-pink-600 text-3xl">SANIA SAEED</h1>
        <h2 className="text-3xl ">WEB</h2>
         <p className="text-3xl px-11">DEVELOPER</p>
         <div className="sm:text-sm">
        <p className="font-thin mt-3 text-4xl md:text-2xl"> I'm a passionate and skilled web developer with several </p> 
           <p className="font-thin text-4xl md:text-2xl">years of experience in the field of web development.</p> </div>
        </div>
        </div>
          <div className="flex justify-center py-7">
          <Button className="text-white bg-pink-600 border-pink-900 hover:bg-pink-950"variant="outline">Contact Me</Button>
          </div>

          <div className="text-white flex justify-center gap-7 py-4">
          <FaFacebookSquare className="w-6 h-6" />
          <FaInstagramSquare className="w-6 h-6"/>
          <FaLinkedin className="w-6 h-6" />

          </div>


    </div>

    ) 
}
export default Hero