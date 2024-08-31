import React from "react";

function About() {
  return (
    <div className="text-center w-[90%] md:w-[70%] mx-auto my-16">
      <div className="text-[#F27121] font-bold text-2xl flex items-center justify-center mb-7">
        <hr className="bg-[#F27121] h-1 w-2/5 mr-7" />
        About
        <hr className="bg-[#F27121] h-1 w-2/5 ml-7" />
      </div>

      <p className="text-justify md:text-center">
        Our products are crafted exclusively from the dreams and screams of
        young kids who wanted to show their mastery in their chosen fields, but
        were directed towards a factory for daily wages. Each cracker bursts
        brighter than their lost smiles, and can be heard louder than their
        cries for miles. Buy them, burst them, brag about them.
      </p>
      <p className="text-bold">
        The choice is yours. Because they don’t have one.
      </p>
    </div>
  );
}

export default About;
