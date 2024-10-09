import React from 'react'
import { ReactTyped } from "react-typed";
import dp from '../../../public/photo.avif'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
const About = () => {
  return (
    <>
      <div className="flex ">
        {/* left section */}
        <div className="container w-1/2 my-auto mx-3 ">
          {/* <h3 className=" ">Welcome in My Feed</h3> */}
          <div className="flex space-x-3  text-3xl py-3  ">
            <h1 className="">Hello,i'm a</h1>
            <h1>
              <ReactTyped
                className=" font-bold text-blue-600 "
                strings={["Programmer", "Coder", "Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >
                <input type="text" />
              </ReactTyped>
            </h1>
          </div>

          <div className="text-justify">
            <p>
              I'm a software engineer with a passion for creating user-friendly
              interfaces. I have worked on various projects, including web,
              mobile, and desktop applications.
            </p>
            <p>
              My programming skills include Python, JavaScript, Java, and C++.
              I'm also proficient in using various frameworks and libraries,
              such as React, Angular, and Flutter.
            </p>
            <p>
              I'm always eager to learn and contribute to the open-source
              community. Feel free to reach out if you're interested in working
              on a project together.
            </p>
          </div>

          {/*for social media icons */}
          <div className="flex justify-evenly">
            <div className="flex-col mt-3 ">
              <h3 className="font-bold ">Available On</h3>
              <div className="flex space-x-3 text-3xl py-3 ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 "
                >
                  <FaSquareFacebook />
                </a>
                <a
                  href=" https://www.facebook.com"
                  className="text-blue-600 hover:text-blue-800 "
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="text-blue-600 hover:text-blue-800 "
                >
                  <IoLogoYoutube />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="text-blue-600 hover:text-blue-800 "
                >
                  <FaTelegram />
                </a>
              </div>
            </div>

            {/* for right icons */}
            <div className="flex-col mt-3 ">
              <h3 className="font-bold ">Currently working on</h3>
              <div className="flex space-x-3 text-3xl py-3 ">
                <a href="#" className="text-blue-600 hover:text-blue-800 ">
                  <SiMongodb />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 ">
                  <SiExpress />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 ">
                  <FaReact />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800 ">
                  <FaNodeJs />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="conatiner w-1/2 my-4 ">
          <img
            src={dp}
            alt=""
            className="h-[400px] w-[400px] rounded-full ml-24 my-4"
          />
        </div>
      </div>
    </>
  );
}

export default About
