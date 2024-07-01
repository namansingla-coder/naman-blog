import React from "react";
import show from "./app"
import profile from "./images/profile.jpg";
import { Link } from "react-router-dom";

function Home(){
    return (
        <>
        <div class="flex justify-end mt-7 mr-8 gap-4">
<div id="header" class="hidden flex gap-4 md:block self-center md:h-12 md:flex md:justify-end md:gap-8">
  <Link class="text-red-400" to="/">Home</Link>
    <Link to="/work">Work</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/blog">Contact</Link>
  </div>
    <button  onClick={show} class="md:hidden block rotate-90">
      <p class="text-3xl">|||</p>
    </button>
        </div>
<div class="flex flex-col gap-8 mx-24 mt-8 md:flex-row md:mt-36 md:gap-28 md:mx-36">
    <img src={profile} alt="profile" class="rounded-full mx-auto max-h-60 md:order-1" />
    <div class="gap-5 max- flex flex-col md:gap-10">
      <h1 class="font-bold text-4xl text-gray-800 text-center md:text-5xl md:text-left">Hi, I am Naman,<br />
      Creative Technologist</h1>
      <p class="text-center text-gray-800 md:text-left">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <button class="self-center bg-red-400 px-5 py-3 text-white font-medium md:self-start">Download Resume</button>
    </div>
  </div>
<div class="mt-14 md:mt-16 flex flex-col bg-blue-50 pb-8">
    <div class="mx-36 md:flex md:justify-between">
    <h3 class="text-center py-5 text-gray-800">Recent Posts</h3>
      <Link to="www.google.com" class="hidden text-sky-500 text-right mt-5 md:inline">view all</Link>
    </div>
    <div class="mx-3 md:mx-36 flex flex-col md:flex-row gap-4 md:gap-5">
      <div class="bg-white px-5 py-3 md:px-6 md:py-5">
        <div class="flex flex-col gap-3 md:gap-4">
          <h2 class="text-2xl font-bold text-gray-800 md:text-3xl">Making a design system from scratch</h2>
          <div class="flex gap-7">
          <p class="text-lg text-gray-800">12 Feb 2020</p>
            <p class="text-lg text-gray-800">|</p>
            <p class="text-lg text-gray-800">Design, Pattern</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        
      </div>
      

      <div class="bg-white px-5 py-3 md:px-6 md:py-5">
        <div class="flex flex-col gap-3 md:gap-4">
          <h2 class="text-2xl font-bold md:text-3xl text-gray-800">Creating pixel perfect icons in Figma</h2>
          <div class="flex gap-7">
          <p class="text-lg text-gray-800">12 Feb 2020</p>
            <p class="text-lg text-gray-800">|</p>
            <p class="text-lg text-gray-800">Figma, Icon Design</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

      </div>
    </div>
    
    
  </div>
        <div class="mx-5 py-4 flex flex-col gap-5 md:mx-36">
    <h3 class="py-1 text-gray-800 text-center md:text-left">Featured works</h3>
    <div class="flex flex-col gap-12">
      <div class="flex flex-col md:flex-row gap-4">
        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
        <div class="flex flex-col gap-5">
          <h2 class="font-bold text-2xl md:text-3xl text-gray-800">Designing Dashboards</h2>
          <div class="flex gap-5 md:gap-6">
            <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
            <p class="text-xl text-gray-400">Dashboard</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <hr />
      <div class="hidden md:block md:flex md:gap-4">
        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
        <div class="flex flex-col gap-5">
          <h2 class="font-bold text-3xl text-gray-800">Vibrant Portraits of 2020</h2>
          <div class="flex gap-16">
            <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
            <p class="text-xl text-gray-400">illudtration</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <hr hidden md:block />
      <div class="hidden md:block md:flex md:gap-4">
        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
        <div class="flex flex-col gap-5">
          <h2 class="font-bold text-3xl text-gray-800">36 Days of Malayalam type</h2>
          <div class="flex gap-16">
            <p class="text-lg border bg-black text-white px-2 rounded-2xl">2018</p>
            <p class="text-xl text-gray-400">Typography</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
      <hr hidden md:block />
        </div>
    </div> 
<div class="mt-36 md:mt-20 flex flex-col gap-2 pb-12">
  <div class="flex gap-7 mx-auto">
    <Link to=""><img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" class="max-w-8 max-h-8" /></Link>
    <Link to=""><img src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" class="max-w-8 max-h-8" /></Link>
    <Link to=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcErlbMsKsQG45xvST9jdYxzWwUWru1KCZJQ&s" class="max-w-8 max-h-8" /></Link>
    <Link to=""><img src="https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png" class="max-w-8 max-h-8" /></Link>
  </div>
  <div class="mx-auto">
    <p class="text-sm text-gray-800">Copyright @2020 All rights reserved</p>
  </div>
  
</div>
</>
    
    )
}
export default Home;