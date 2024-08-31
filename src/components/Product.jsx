import React from "react";
import Button from "./Button";
import ViewModal from "./ViewModal";

function Product() {
  return (
    <div className="text-center w-[90%] md:w-[70%] mx-auto my-16">
      <h1 className="text-[#F27121] font-bold text-2xl flex items-center justify-center mb-7">
        <hr className="bg-[#F27121] h-1 w-2/5 mr-7" />
        Product
        <hr className="bg-[#F27121] h-1 w-2/5 ml-7" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <img src="img2.png" alt="product image" />
          <div className="flex items-center justify-between my-4">
            <p className="font-semibold">Raju Rassibomb</p>
            <ViewModal value={{change:false}}/>
          </div>
        </div>
        <div>
          <img src="img2.png" alt="product image" />
          <div className="flex items-center justify-between my-4">
            <p className="font-semibold">Ladiyon ki Rani Chani</p>
            <ViewModal value={{change:false}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
