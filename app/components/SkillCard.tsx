"use client"
import {  faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const SkillCard = () => {
  const route  = useRouter()
  return (
    <>
      {/* first Card */}

      <div className=" bg-gradient-to-b from-[#20C3B6] to-white p-[0.1rem] rounded-lg ">
        <div className="bg-white p-1 rounded-md">
          <div className="w-[13rem] p-0 relative ">
            <h2 className=" text-center text-[0.9rem] bg-[#372E2E] py-2 px-4 rounded-lg text-white text-wrap tracking-[0.4rem] absolute top-[-2rem] left-[2.1rem]">
              Technical & Professional
            </h2>
          </div>

          <div className="bg-[#20C3B6] space-y-5 rounded-md px-5 pt-10 pb-5">
            <div>
              <h1 className="text-[1.8rem] tracking-[0.3em] font-bold">
                Front End
              </h1>
              <h1 className="font-thin text-[1.1rem] tracking-wide">
                Website Development{" "}
              </h1>
            </div>

            <p className="text-[0.8rem] w-[14rem]">
              Building Optimized,{" "}
              <span className="text-red bg-black py-[0.1rem] px-2 rounded leading-7">
                Responsive
              </span>{" "}
              Web Applications with Passion and Precision.
            </p>

            <button onClick={()=>route.push("https://www.linkedin.com/in/sadaf-shahab-ssr123")} className="flex gap-3 mx-auto items-center bg-black text-white py-2 px-5 rounded-lg text-[0.9rem]">
              {`Let's Collaborate`}
              <FontAwesomeIcon icon={faUsers} width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
