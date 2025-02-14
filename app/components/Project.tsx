import React from "react";
import ProjectCard from "../components/ProjectCard";

import Link from "next/link";

const Project = () => {
  return (
    <>
      <section>
        <div>
          <h1 className="text-[1.5rem] md:text-[2rem] font-black text-center py-2 md:py-6">
            My Projects
          </h1>
        </div>
        <div className="px-3 md:px-10 py-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-5 md:gap-10">
            <ProjectCard />
          </div>
        </div>
        <div className="text-center my-5">
          <button>
            <Link
              href="https://github.com/sadafshahab12"
              className="text-[0.9rem]  bg-black text-white py-3 px-5 text-center  cursor-pointer"
            >
              Visit Github
            </Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Project;
