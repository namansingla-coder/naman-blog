import React from "react";
import show from "./app";
import { Link } from "react-router-dom";
import Project from "./project";
import Eazy_cart_1 from "./images/eazyCartes_home.png"
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
    <Project id="1" title="Eazy Carters" date="2024" subheading="Ecommerce" images={[Eazy_cart_1]} discrptions={["An e-commerce website project involves creating an online platform where users can browse, select, and purchase products or services. The website typically includes features such as product catalogs, shopping carts, user accounts, payment gateways, and order management systems."]} />
    </Link>
    <hr/>
    <Link to="">
    <div class="hidden md:flex md:block md:flex-row gap-4">
    <Project id="1" title="Eazy Carters" date="2024" subheading="Ecommerce" images={[Eazy_cart_1]} discrptions={["An e-commerce website project involves creating an online platform where users can browse, select, and purchase products or services. The website typically includes features such as product catalogs, shopping carts, user accounts, payment gateways, and order management systems."]} />
    </div>
    </Link>
    <hr class="hidden md:block"/>
    <Link to="">
    <div class="hidden md:flex md:block md:flex-row gap-4">
    <Project id="1" title="Eazy Carters" date="2024" subheading="Ecommerce" images={[Eazy_cart_1]} discrptions={["An e-commerce website project involves creating an online platform where users can browse, select, and purchase products or services. The website typically includes features such as product catalogs, shopping carts, user accounts, payment gateways, and order management systems."]} />
    </div>
    </Link>
    <hr  class="hidden md:block" />
    <Link to="">
    <Project id="1" title="Eazy Carters" date="2024" subheading="Ecommerce" images={[Eazy_cart_1]} discrptions={["An e-commerce website project involves creating an online platform where users can browse, select, and purchase products or services. The website typically includes features such as product catalogs, shopping carts, user accounts, payment gateways, and order management systems."]} />
    </Link>
    <hr/>
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
export default Work;