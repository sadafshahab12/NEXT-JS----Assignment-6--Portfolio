import React from "react";
import Image from "next/image";

interface TService {
  src: string;
  h1: string;
  h2: string;
  p: string;
}
const MyServices = ({ src, h1, h2, p }: TService) => {
  return (
    <>
      <div className="bg-white w-full h-full hover:scale-105 duration-500 p-4 md:p-7 rounded-2xl shadow-lg border border-slate-400">
        <div className="flex items-center">
          <div>
            <div className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] ">
              <Image src={src} alt="card-img" width={400} height={400} />
            </div>
          </div>
          <div className="space-y-6 text-right ">
            <div>
              <span className="text-[1rem] md:text-[1.3rem] text-[#1877F2] font-black tracking-[0.2rem]">
                {h1}{" "}
              </span>
              <span className="text-black text-[1rem] md:text-[1.2rem] font-black">
                {h2}
              </span>
            </div>

            <p className="text-[0.8rem]  text-[#676363]">{p}</p>
            <button className="text-[0.9rem] bg-black text-white font-light rounded-md py-1 px-3">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyServices;
