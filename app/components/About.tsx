"use client"
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ABoutIcon from "../components/ABoutIcon";
import { useRouter } from "next/navigation";
const About = () => {
  const route = useRouter()
  return (
    <>
      <section className="bg-about bg-cover py-6 px-6 md:py-12 md:px-12" >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-around lg:flex-row flex-col items-center">
            {/* left  */}
            <div>
              <div className="w-[23rem] h-[23rem] lg:block hidden">
                <Image
                  src="/images/front end.jpeg"
                  width={400}
                  height={400}
                  alt="about-img"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              {/* right */}
              <div className="space-y-5 md:space-y-10">
                <h1 className="text-purple font-black text-[1.75rem] md:text-[3rem] text-center">
                  About <span className="text-black">ME</span>{" "}
                </h1>
                <div className="xss:w-[18rem] xss:h-[15rem] sm:w-[15rem] sm:h-[15rem] lg:hidden block mx-auto">
                  <Image
                    src="/images/front end.jpeg"
                    width={400}
                    height={400}
                    alt="about-img"
                    className=" xss:rounded-3xl sm:rounded-full w-full h-full object-cover"
                  />
                </div>
                <div className="w-[18rem] sm:w-[36rem]">
                <p className="text-[0.8rem] md:text-[1rem] text-wrap font-normal text-gray  tracking-wider w-full text-center leading-6  md:leading-8 ">
                  I am a Front-End Developer passionate about creating
                  responsive and user-friendly web applications. With skills in
                  HTML, CSS, JavaScript, React.js, Next.js, and Tailwind CSS, I
                  thrive on turning ideas into interactive experiences. I also
                  have a solid background in Python and SQL, which enhances my
                  ability to develop full-stack solutions.
                </p>
                </div>
                
                <div className="button flex md:space-y-0 space-y-3 md:space-x-5 justify-center items-center md:flex-row flex-col">
                  <div>
                    <button onClick={()=>route.push("https://wa.me/+923402195735")}
                      className={`flex gap-3 items-center py-2 px-10 rounded-full hover:about-btn text-[0.8rem] bg-black text-white cursor-pointer `}
                    >
                      {"Let's talk"}
                      <FontAwesomeIcon
                        icon={faMessage}
                        width={15}
                        height={15}
                      />
                    </button>
                  </div>
                  <div>
                    <button onClick={()=>route.push("https://github.com/sadafshahab12")}
                      className={`flex gap-3 items-center  py-2 px-6 rounded-full hover:about-btn text-[0.8rem]  bg-purple text-white cursor-pointer `}
                    >
                      View My Work
                      <FontAwesomeIcon icon={faGithub} width={18} height={18} />
                    </button>
                  </div>
                </div>
                <div className="icon flex gap-8 justify-center items-center pt-5">
                  <ABoutIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
