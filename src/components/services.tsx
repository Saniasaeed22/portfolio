import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { FaSearchengin } from "react-icons/fa";
import { TbBrandWebflow } from "react-icons/tb";


const Services= () =>{
    return(
        <section>
            <div id ="services"className="container max-auto text-whit bg-black py-10 px-4 max-w-screen-2xl">
                <div>
                    <h1 className="text-3xl text-white font-bold p-7">Services</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] ">
                        <div className="flex flex-col gap-4 px-8 py-10
                         text-white bg-pink-600 border-pink-700 rounded-md">
                    
                            <FaLaptopCode />
                         <h2 className="font-medium text-2xl p-2">Website Development</h2>
                          <p>I am a Front-end developer  and use HTML, CSS, and JavaScript 
                          to make a website visually appealing and responsive and 
                          also Back-end developers and use languages like PHP, Python, Ruby, 
                          and frameworks like Node.js to create databases,server logic,
                          and APIs that support website functionality.
                          I am proficient in both front-end and back-end development,enabling 
                          them to build complete web applications. </p>
                        </div>
                        <div className=" shadow-lgflex flex-col gap-4 px-8 py-10
                         text-white bg-pink-600 border-pink-700 rounded-md ">
                        <MdOutlineMobileFriendly />
                         <h2 className="font-medium text-2xl p-2">Responsive Design and Mobile Optimization</h2>
                         <p> I Ensurea website works well across all device sizes
                              (desktops, tablets, smartphones) is crucial today.
                             I used responsive design techniques to make sure websites
                              are mobile-friendly,optimizing layouts and interactions for smaller screens.</p>
                         </div>
                         <div className=" shadow-lg flex flex-col gap-4 px-8 py-10
                         text-white bg-pink-600 border-pink-700 rounded-md "> 
                         <FaSearchengin />
                         <h2 className="font-medium text-2xl">Search Engine Optimization (SEO) </h2>
                         <p>Many web developers offer SEO services, making sure that a site is built 
                            with best practices for search engines in mind. This includes optimizing 
                            site speed, implementing meta tags, and ensuring site structure
                            is optimized for ranking.</p>
                         </div>
                         <div className="shadow-lg flex flex-col gap-4 px-8 py-10
                         text-white bg-pink-600 border-pink-700 rounded-md">
                            <TbBrandWebflow />
                        <h2 className="font-medium text-2xl">Custom Web Applications </h2>
                         <p>For businesses needing more than a traditional website, 
                        I am create custom web applications tailored to specific functions,
                         such as online booking systems,customer portals, and internal tools.
                          These applications often involve complex logic and interactivity.</p>
                         </div>
                    </div>
            
               </div>

            </div>
        </section>
 
    )
}
export default Services