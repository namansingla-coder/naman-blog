import React from "react";
import show from "./app";
import { Link } from "react-router-dom";
function Work(){
    return (
        <>
        <div class="flex justify-end mt-7 mr-8 gap-4">
  <div id="header" class="hidden flex gap-4 md:block self-center md:h-12 md:flex md:justify-end md:gap-8">
  <Link to="/">Home</Link>
    <Link class="text-red-400" to="/work">Work</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/blog">Contact</Link>
    </div>
      <button  onClick={show} class="md:hidden block rotate-90">
        <p class="text-3xl">|||</p>
      </button>
    </div>
  <h1 class="py-4 font-bold text-3xl text-gray-800 mt-6 mx-5 md:my-28 md:mx-60 md:text-4xl md:font-extrabold">Work</h1>
  <div class="mt-3 flex flex-col gap-4 mx-5 md:mt-6 md:mx-60 md:gap-10">
    <Link to="./dashboard.html">
    <div class="flex flex-col md:flex-row gap-4">
    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
    <div class="flex flex-col gap-5">
      <h2 class="font-bold text-2xl text-gray-800 md:text-3xl">Designing Dashboards</h2>
      <div class="flex gap-5 md:gap-6">
        <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
        <p class="text-xl text-gray-400">Dashboard</p>
      </div>
      <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  </div>
    </Link>
    <hr/>
    <Link to="">
    <div class="hidden md:flex md:block md:flex-row gap-4">
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
      <div class="flex flex-col gap-5">
        <h2 class="font-bold text-2xl text-gray-800 md:text-3xl">Vibrant Portraits of 2020</h2>
        <div class="flex gap-5 md:gap-6">
          <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
          <p class="text-xl text-gray-400">Illustration</p>
        </div>
        <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
    </Link>
    <hr class="hidden md:block"/>
    <Link to="">
    <div class="hidden md:flex md:block md:flex-row gap-4">
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
      <div class="flex flex-col gap-5">
        <h2 class="font-bold text-2xl text-gray-800 md:text-3xl">36 Days of Malayalam type</h2>
        <div class="flex gap-5 md:gap-6">
          <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
          <p class="text-xl text-gray-400">Typography</p>
        </div>
        <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
    </Link>
    <hr  class="hidden md:block" />
    <Link to="">
    <div class="flex flex-col md:flex-row gap-4">
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/317287654/original/72386893175d493ae6e30bdf93ed5c17a7169b66/create-creative-and-user-friendly-dashboards-for-best-business-insights.png" class="max-w-64 max-h-44" />
      <div class="flex flex-col gap-5">
        <h2 class="font-bold text-2xl text-gray-800 md:text-3xl">Components</h2>
        <div class="flex gap-5 md:gap-6">
          <p class="text-lg border bg-black text-white px-2 rounded-2xl">2020</p>
          <p class="text-xl text-gray-400">Components, Design</p>
        </div>
        <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
    </div>
    </Link>
    <hr/>
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
export default Work;