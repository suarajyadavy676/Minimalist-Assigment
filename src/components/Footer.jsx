import React from "react";
import { LiaInstagram } from "react-icons/lia";
import { RiYoutubeLine } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
     <div className="bg-[#25A769] p-4">
  <div className="w-[96%] md:w-[80%] mx-auto grid grid-cols-3 justify-between items-center">
    {/* Left logo */}
    <div>
      <img src="logo.png" alt="logo" className="h-16" />
    </div>

    {/* Social media icons */}
    <div>
      <p className="text-lg md:text-2xl text-center text-[#ECE14C] my-2">Follow us on</p>
      <div className="text-center">
        <LiaInstagram className="inline mr-2 text-xl md:text-3xl" />
        <RiYoutubeLine className="inline mr-2 text-xl md:text-3xl" />
        <AiFillTwitterCircle className="inline mr-2 text-xl md:text-2xl" />
        <FaFacebook className="inline mr-2 text-xl md:text-2xl" />
        <FaLinkedin className="inline mr-2 text-xl md:text-2xl" />
      </div>
    </div>

    {/* Right logo */}
    <div className="flex justify-end">
      <img src="logo.png" alt="logo" className="h-16" />
    </div>
  </div>
</div>

    </>
  );
}

export default Footer;
