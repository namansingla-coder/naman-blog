import React from "react";
import show from "./app";
import { Link } from "react-router-dom";
function Blog(){
    return (
        <>
            <div class="flex justify-end mt-7 mr-8 gap-4">
  <div id="header" class="hidden flex gap-4 md:block self-center md:h-12 md:flex md:justify-end md:gap-8">
  <Link to="/">Home</Link>
    <Link to="/work">Work</Link>
    <Link  class="text-red-400" to="/blog">Blog</Link>
    <Link to="/blog">Contact</Link>
    </div>
      <button  onClick={show} class="md:hidden block rotate-90">
        <p class="text-3xl">|||</p>
      </button>
    </div>
  <h1 class="font-bold text-3xl text-gray-800 mt-6 mx-5 md:my-28 md:mx-60 md:text-4xl">Blog</h1>
  <div class="flex flex-col gap-5 mx-5 mt-5 md:mx-60 mt-14 md:gap-8">
    <div class="flex flex-col gap-3 md:gap-4">
          <h2 class="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
          <div class="flex gap-7">
          <p class="text-lg text-gray-800 md:text-xl">12 Feb 2020</p>
            <p class="text-lg text-gray-800 md:text-xl">|</p>
            <p class="text-lg text-gray-400 md:text-xl">Express, Handlebars</p>
          </div>
          <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    <hr />
    <div class="flex flex-col gap-3 md:gap-4">
      <h2 class="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div class="flex gap-7">
      <p class="text-lg text-gray-800">12 Feb 2020</p>
        <p class="text-lg text-gray-800">|</p>
        <p class="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />
    <div class="flex flex-col gap-3 md:gap-4">
      <h2 class="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div class="flex gap-7">
      <p class="text-lg text-gray-800">12 Feb 2020</p>
        <p class="text-lg text-gray-800">|</p>
        <p class="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />
    <div class="flex flex-col gap-3 md:gap-4">
      <h2 class="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div class="flex gap-7">
      <p class="text-lg text-gray-800">12 Feb 2020</p>
        <p class="text-lg text-gray-800">|</p>
        <p class="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p class="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />

  </div>
  <div class="mt-36 md:mt-20 flex flex-col gap-2 pb-12">
    <div class="flex gap-7 mx-auto">
      <Link to=""><img src="https://i.pinimg.com/736x/bb/90/24/bb902442d0880e99732aa1aada0c08de.jpg" class="max-w-8 max-h-8" /></Link>
      <Link to="https://www.instagram.com/naman_singla__/"><img src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" class="max-w-8 max-h-8" /></Link>
      <Link to="https://x.com/NamanSingla7642"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcErlbMsKsQG45xvST9jdYxzWwUWru1KCZJQ&s" class="max-w-8 max-h-8" /></Link>
      <Link to="https://www.linkedin.com/in/namansingla7642"><img src="https://static.vecteezy.com/system/resources/previews/018/930/585/original/linkedin-logo-linkedin-icon-transparent-free-png.png" class="max-w-8 max-h-8" /></Link>
    </div>
    <div class="mx-auto">
      <p class="text-sm text-gray-800">Copyright @2020 All rights reserved</p>
    </div>

  </div>
        </>
    )
}
export default Blog;