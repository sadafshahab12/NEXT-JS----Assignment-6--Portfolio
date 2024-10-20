"use client"
import { useRouter } from "next/navigation";
import React from "react";

const GetStarted = () => {
  const route = useRouter();
  return (
    <>
      <section className="pt-5 pb-10">
        <div className="max-w-7xl mx-auto md:bg-getstarted bg-getstartedmb bg-cover">
          <div className=" md:flex-row flex-col flex justify-between items-center py-[2rem] lg:py-[3.4rem] ">
            <div className="px-[3rem] xs:px-[5rem]">
              <h1 className="text-red font-black md:text-[3.37rem]  sm:text-[2.5rem] xss:text-[2rem] sm:text-left text-center">
                Ready <span className="text-white">to Get Started?</span>{" "}
              </h1>
            </div>
            <div className=" px-[2rem] md:px-[5rem] md:pt-0 xss:pt-[5.5rem] space-y-[2rem] sm:space-y-[3rem]  md:space-y-[7rem]">
              <div>

           
              <p className="xs:text-white text-black xss:text-[1rem] sm:text-[1.5rem] md:text-left text-center text-wrap md:text-nowrap ">
                {"You know about me, Let’s talk"}
              </p>
              <p className="xs:text-white text-black xss:text-[1rem] sm:text-[1.5rem] md:text-left text-center text-wrap lg:text-nowrap "> about you</p>
              </div>
              <button onClick={()=> route.push("https://github.com/sadafshahab12")} className="bg-white rounded-md py-2 px-4 md:mx-0 mx-auto block">
                {"Let's Connect"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
