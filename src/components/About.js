import React from "react";
import ImageContainer from "./ImageContainer";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Dimuthu.
            <br className="hidden lg:inline-block" />I love building amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a passionate software engineer specialized in bulding high
            performing scalable backend applications. I love to work with Spring
            boot with Java and Node JS with Typescript. I have a high regard on
            Documentation and I like to code clean code. I'm also a tech
            blogger, trying new things and teach others how to try it.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.fiverr.com/credoxyz"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <a
              href="https://billa-code.medium.com/"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              See my Blog
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <ImageContainer
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
