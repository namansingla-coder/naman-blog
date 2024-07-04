import React from "react";
function project({id,title,date,subheading,images,discrptions}){
    return (
        <>
            <div class="flex flex-col md:flex-row gap-4">
            <img src={images[0]} class="max-w-64 max-h-44" />
            <div class="flex flex-col gap-5">
            <h2 class="font-bold text-2xl text-gray-800 md:text-3xl">{title}</h2>
            <div class="flex gap-5 md:gap-6">
            <p class="text-lg border bg-black text-white px-2 rounded-2xl">{date}</p>
            <p class="text-xl text-gray-400">{subheading}</p>
            </div>
            <p class="text-base text-gray-800">{discrptions[0]}</p>
            </div>
            </div>
        </>
    )

}
export default project