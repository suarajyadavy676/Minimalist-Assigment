import React from "react";
import ViewModal from "./ViewModal";

function Home() {
  return (
    <div className="bg-[url(/img1.png)] bg-cover bg-center w-[100%] mx-auto mb-10">
    <div className="bg-black bg-opacity-20 px-10">
      <div className="bg-black bg-opacity-10">
        <img src="Frame.png" alt="frame" className="py-3" />
      </div>
      <p className="text-xl mt-32 mb-5 p-2 text-white">
        The choice is yours. Because they don’t have one.
      </p>
      <div className="pb-10">
        <ViewModal value={{ change: true }} />
      </div>

      {/* <button className='bg-white text-red-600 px-4 py-2 mb-16 mx-4 rounded-md font-semibold'>QUICK VIEW</button> */}
    </div>
    </div>
  );
}

export default Home;
