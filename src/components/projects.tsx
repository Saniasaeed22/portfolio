import React from "react";


const Projects=() => {
    return(
        <section id="project" className="flex items-center justify-center min-h-screen max-w-screen-2xl container max-auto bg-black">
            <div>
                <h1 className="text-white font-bold text-2xl p-7">Projects </h1>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    *//card
                    <div className="rounded-xl shadow-lg">
                        <div className="flex flex-col p-5">
                            <div className="rounded-xl overflow-hidden bg-white">
                                <img src="/project01.jpg" alt=""/>
                                <div>
                                    <h1 className=" text-2xl md:text-3xl font-bold mt-3 p-2  group-hover:transition-all duration-300 ease-out">WEBSITE</h1>
                                    <p className=" text-sm mt-3 p-2 text-slate-500">An e-commerce website is an online platform designed for buying and 
                                        selling products or services. It typically includes essential features like product listings,
                                         a shopping cart, secure checkout, and payment processing to provide a smooth shopping experience</p>
                                    <a href="a"className="text-center bg-pink-600 text-white py-2 rounded-md mt-4 p-2 flex justify-center font-semibold">Explore</a>
                                </div>
                            </div>
                    
                        </div> 
                        <div className="rounded-xl shadow-lg"></div>
                        <div className="flex flex-col p-5">
                            <div className="rounded-xl overflow-hidden bg-white">
                                <img src="/project2.jpg" alt=""/>
                                <div>
                                    <h1 className=" text-2xl md:text-3xl font-bold mt-3 p-2">CALCULATOR</h1>
                                    <p className=" text-sm text-slate-500 mt-3 p-2">It  basic web-based calculator built with HTML, CSS, and JavaScript.
                                         It features a simple interface with buttons for numbers, basic arithmetic operations 
                                        (addition, subtraction, multiplication, and division),
                                         and a display area to show the input and results. </p>
                                    <a href="a"className="text-center bg-pink-600 text-white py-2 rounded-md mt-4 p-2 flex justify-center font-semibold hover:bg-pink-500 transition-all duration-200 ease-out">Explore</a>
                                </div>
                            </div>
                        </div> 
                        <div className="rounded-xl shadow-lg"></div>
                        <div className="flex flex-col p-5">
                            <div className="rounded-xl overflow-hidden bg-white">
                                <img src="/project003.jpg" alt=""/>
                                <div>
                                    <h1 className=" text-2xl md:text-3xl font-bold mt-3 p-2">WEATHER APP</h1>
                                    <p className=" text-sm text-slate-500 mt-3 p-2">The Weather App project is a web-based application 
                                        that provides real-time weather information for any city. It is built using HTML, CSS, and JavaScript, 
                                        and often incorporates a weather API (such as OpenWeatherMap) to fetch live data like temperature,
                                         humidity, wind speed, and forecast details.</p>
                                    <a href="a"className="text-center bg-pink-600 text-white py-2 rounded-md mt-4 p-2 flex justify-center font-semibold hover:bg-pink-500 transition-all duration-200 ease-out">Explore</a>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    )
}
export default Projects