import React from "react";
import PageLogo from "./PageLogo";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto p-5 md:m-auto">
      <div className="container h-full">
        <div className="flex items-center justify-center mb:ml-8 mt-4 md:justify-start">
          <PageLogo />
          <b className="ml-4 title-medium">Ricardo APP</b>
        </div>
        <ul className="grid grid-cols-2 gap-8 p-6 md:px-28  md:grid-cols-4 md:mt-4 ">
          <li>
            <h1 className="font-bold my-4">
              Get in touch
            </h1>
            <ul>
              <li className="md:my-4">About Us</li>
              <li className="md:my-4">Careers</li>
              <li className="md:my-4">Press Releases</li>
              <li className="md:my-4">Blog</li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">Connections</h1>
            <ul className="">
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiFacebook className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Facebook
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiTwitter className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Twitter
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <SiInstagram className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Instagram
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <IoLogoYoutube className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                Youtube
              </li>
              <li className="space-x-2 flex md:mt-4 md:mb-4">
                <FaLinkedinIn className="md:h-6 md:w-6 h-4 w-4 mt-1 cursor-pointer hover:text-main md:cursor-pointer mr-1" />
                LinkedinIn
              </li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">
              Earnings
            </h1>
            <ul>
              <li className="md:my-4">Become an Affiliate</li>
              <li className="md:my-4">Advertise your product</li>
              <li className="md:my-4">Sell on Market</li>
            </ul>
          </li>
          <li>
            <h1 className="font-bold my-4">
              Account
            </h1>
            <ul>
              <li className="md:my-4">Your account</li>
              <li className="md:my-4">Returns Centre</li>
              <li className="md:my-4">100 % purchase protection</li>
              <li className="md:my-4">Chat with us</li>
              <li className="md:my-4">Help</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="text-center mt-10 ">
        <p>&copy; 2022 <span className='text-main'>Ricardo APP.</span> All rights reserved. Designed by JV, AN, LV & FJ.</p>
      </div>
    </footer >
  );
}
