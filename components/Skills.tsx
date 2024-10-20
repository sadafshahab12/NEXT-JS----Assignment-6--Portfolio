import React from "react";
import SkillCard from "@/components/SkillCard";
import Skill2ndCard from "@/components/Skill2ndCard";
import SecondSkill from "@/components/SecondSkill";

const Skills = () => {
  return (
    <>
      <section className="md:bg-skill bg-skillbg bg-cover bg-center py-4 md:py-10">
        <div className="flex flex-col relative">
          {/* left  */}

          <div className="text-center ">
            <h1 className="text-[1.75rem] md:text-[3rem] font-black">
              My Skill
            </h1>

            <p className="text-[#565555] md:px-[15rem] pt-4 mx-auto tracking-wider text-wrap text-[0.8rem] px-[2rem]  md:text-[1.1rem]">
              Showcasing a diverse skill set in front-end development and
              graphic design to create engaging, user-centric digital
              experiences.
            </p>
          </div>
          <div className="flex justify-evenly items-center sm:flex-row flex-col pt-10">
            <div className="md:py-0 py-5">
              <SkillCard />
            </div>

            <div className="md:py-0 py-8">
              <Skill2ndCard />
            </div>
          </div>
        </div>
      </section>
      <SecondSkill/>
    </>
  );
};

export default Skills;
