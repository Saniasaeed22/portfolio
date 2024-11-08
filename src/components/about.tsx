import React from "react";
import Heading from "./heading";
import { Progress } from "@/components/ui/progress"



const About =() =>{
    return(
       <section id="about" className="container mx-auto py-9 px-4  bg-black max-w-screen-2xl">
        <h1 className="text-white font-bold text-3xl flex justify-center">About Me</h1>
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            <div>
                <img  className="w-[400px]"src="/a1.png" alt="" />
            </div>
            <div>
                <div className=" flex items-center justify-between w-[400px]">
                    <div className="flex flex-col ga-6">    
                        <div className="flex gap-4 font-thin text-white px-4">
                            <p>I am a skilled professional responsible for designing, building,and maintaining websites and web applications and work with various 
                                 programming languages,such as HTML, CSS, JavaScript,Typescript and Nextjs </p>
                                 
                        </div>
                    </div>

                </div>
        <div>
            <h1 className="font-bold text-white text-2xl p-4">HTML/CSS</h1>
            <div 
            style={{ width: "90%" }}
            className="w-full max-w-lg h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full overflow-hidden">
            <Progress/> </div>

            </div>
            <div>
            <h1 className="font-bold text-white text-2xl p-4">JavaScript</h1>
            <div 
            style={{ width: "85%" }}
            className="w-full max-w-lg h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full overflow-hidden">
            <Progress/> </div>

            <div>
            <h1 className="font-bold text-white text-2xl p-4">TypeScript</h1>
            <div 
            style={{ width: "70%" }}
            className="w-full max-w-lg h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full overflow-hidden">
            <Progress/> </div>

            <div>
            <h1 className="font-bold text-white text-2xl p-4">Next.Js</h1>
            <div 
            style={{ width: "50%" }}
            className="w-full max-w-lg h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full overflow-hidden">
            <Progress/> </div>

            </div>
            </div>
            </div>
        </div>    
        </div>
       </section>
    )
}
export default About