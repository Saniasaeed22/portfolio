import React from "react";

const Heading= ({level= 1,title="" }) => {
    return(
        <div className=" text-[#ffff] text-[32px] font-medium flex items-center gap-4 py-16">
            {title}
            <div className="bg-black h-2px w-40px translate-y-1"></div>

        </div>
    )
}
export default Heading