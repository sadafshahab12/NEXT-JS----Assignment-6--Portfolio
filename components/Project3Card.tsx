"use client"
import { faUpRightFromSquare, faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Badges } from "@/components/Badges";
import { useRouter } from "next/navigation";

interface TProject {
  h1: string;
  p: string;
  src: string;
  projectLink : string,
}
const Project3Card = ({ h1, p, src, projectLink }: TProject) => {
  const route = useRouter();
  return (
    <>
      <div className="bg-[#2E2E2E] p-3 rounded-md">
        <div className="h-[12rem] md:h-[16rem] overflow-hidden rounded-md">
          <Image
            src={src}
            alt="nextjs-project-img"
            width={400}
            height={400}
            className="rounded-md shadow-lg h-full object-cover hover:scale-110 duration-500 "
          />
        </div>
        <div className="pt-5 space-y-4 text-center">
          <div>
          <h1 className="text-white text-[1rem] md:text-[1.3rem] font-black tracking-wider ">
              {h1}
            </h1>
            <div className="tag flex gap-3 justify-center pt-2">
              <div>
                <Badges badge="HTML" />
              </div>
              <div>
                <Badges badge="CSS" />
              </div>
              <div>
                <Badges badge="BootStrap" />
              </div>
            </div>
          </div>

          <p className="text-white text-[0.6rem] md:text-[0.7rem] tracking-widest md:leading-5 leading-4 px-[2rem]">
            {p}
          </p>
          <div className="button flex items-center justify-center gap-3 sm:flex-row flex-col ">
          <button onClick={()=> route.push("https://github.com/sadafshahab12")} className="flex gap-3 items-center bg-white rounded-sm  py-2 sm:px-4  px-2 text-[0.7rem]">
              Explore More{" "}
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                width={15}
                height={15}
              />
            </button>
            <button onClick={()=>route.push(projectLink)}  className="bg-black border text-white flex gap-3 rounded-sm  py-2 px-4 items-center text-[0.7rem]">
              Live Demo <FontAwesomeIcon icon={faWifi} width={15} height={15} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project3Card;
