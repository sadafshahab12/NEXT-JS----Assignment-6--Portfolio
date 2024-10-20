import React from "react";
import { Piechart } from "@/components/Piechart";
import { SkillBar } from "@/components/SkillBar";
const SecondSkill = () => {
  return (
    <>
      <section>
        <div>
          <div className="text-center mx-auto my-10 w-[12rem] xs:w-[23rem]">
            <h1 className="text-[1.5rem] md:text-[2rem] pb-3">
              What Can I <span className="text-red font-black">do</span>
            </h1>
            <h1 className="text-[1.2rem] mx-auto w-full  block md:text-[2.2rem] rounded-lg bg-black mb-6 text-red font-bold">
              {" "}
              For Your Needs
            </h1>
          </div>
          <div className="bg-black rounded-tl-[3rem]  lg:rounded-tl-[7rem] rounded-br-[3rem] lg:rounded-br-[7rem] py-7 px-6 lg:py-10 lg:px-12 flex justify-center items-center sm:items-start  sm:flex-row flex-col gap-5 lg:gap-20">
            {/* first  */}
            <div className=" h-[22rem] sm:h-[23rem] md:h-[28rem] w-[17rem] sm:w-[30rem]">
              <Piechart />
            </div>
            <div className="h-[22rem] sm:h-[25rem] w-[17rem] sm:w-[26rem]">
              <SkillBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSkill;
