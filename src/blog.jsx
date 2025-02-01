import React from "react";
import Header from "./header";
import Footer from "./footer";
function Blog(){
    return (
        <>
            <Header selected="blog"/>
  <h1 className="font-bold text-3xl text-gray-800 mt-6 mx-5 md:my-28 md:mx-60 md:text-4xl">Blog</h1>
  <div className="flex flex-col gap-5 mx-5 mt-5 md:mx-60 mt-14 md:gap-8">
    <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
          <div className="flex gap-7">
          <p className="text-lg text-gray-800 md:text-xl">12 Feb 2020</p>
            <p className="text-lg text-gray-800 md:text-xl">|</p>
            <p className="text-lg text-gray-400 md:text-xl">Express, Handlebars</p>
          </div>
          <p className="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    <hr />
    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div className="flex gap-7">
      <p className="text-lg text-gray-800">12 Feb 2020</p>
        <p className="text-lg text-gray-800">|</p>
        <p className="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p className="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />
    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div className="flex gap-7">
      <p className="text-lg text-gray-800">12 Feb 2020</p>
        <p className="text-lg text-gray-800">|</p>
        <p className="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p className="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />
    <div className="flex flex-col gap-3 md:gap-4">
      <h2 className="text-2xl font-medium text-gray-800 md:text-3xl">UI Interactions of the week</h2>
      <div className="flex gap-7">
      <p className="text-lg text-gray-800">12 Feb 2020</p>
        <p className="text-lg text-gray-800">|</p>
        <p className="text-lg text-gray-400">Express, Handlebars</p>
      </div>
      <p className="text-base text-gray-800">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
    <hr />

  </div>
 <Footer/>
        </>
    )
}
export default Blog;