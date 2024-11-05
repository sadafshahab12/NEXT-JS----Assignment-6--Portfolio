"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Hero = () => {
  const route = useRouter();
  return (
    <>
      <section>
        <div className=" pb-3 md:px-10 md:pb-10 pt-8 md:pt-18 xss:text-center sm:text-left">
          <div className="flex justify-around items-center lg:flex-row flex-col">
            {/* left  */}
            <div>
              <p className="font-thin text-black sm:text-[1.25rem] text-[1rem]">
                Explore My
              </p>
              <p className="text-red font-black sm:text-[1.5rem] text-[1rem] tracking-wider pb-6">
                Coding <span className="text-black">Universe</span>
              </p>
              <p className="font-thin text-black text-[1.5rem]">Hi! I am</p>
              <p className="text-black font-black tracking-tight xss:text-[2.5rem] sm:text-[3.5rem] md:text-nowrap  md:text-[4.5rem] leading-[5rem]">
                Sa<span className="text-red">daf</span>{" "}
                <span className="text-black">
                  Shah<span className="text-red">ab</span>
                </span>
              </p>
              <p className="text-black text-[1rem]  md:text-[1.7rem] font-semibold tracking-[0.3rem] py-5">
                Front-End{" "}
                <span className="text-red font-extralight">Developer</span>
              </p>
              {/* image  */}
              <div className="flex justify-center items-center md:hidden">
                <div className="circle w-[14rem] h-[14rem] relative lg:my-0 my-14">
                  <Image
                    src="/images/circle2.jpg"
                    alt="circle"
                    width={400}
                    height={400}
                  />
                  <div className="image w-full absolute bottom-12 right-4 ">
                    <Image
                      src="/images/hero-img.png"
                      alt="hero-image"
                      width={400}
                      height={400}
                      className="transform scale-x-[-1]"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray pb-8 w-[20rem] md:w-[25rem] text-[0.8rem] sm:text-[1rem]">
                As Freelancer, I build beautiful and functional websites that
                enhance user experience.{" "}
              </p>
              <div className="space-x-4 pb-5">
                <button
                  onClick={() =>
                    route.push(
                      "https://www.linkedin.com/in/sadaf-shahab-ssr123"
                    )
                  }
                  className="border-[1.5px] text-[1rem] border-black py-1 px-5 cursor-pointer hover:bg-red hover:border-red hover:text-white duration-500 active:scale-95"
                >
                  Hire Me
                </button>
                <button
                  onClick={() => route.push("/projects")}
                  className="bg-gradient-to-b from-[#666666] to-black py-[0.3rem] px-5  text-white  text-[1rem] cursor-pointer active:scale-95 duration-300"
                >
                  Projects
                </button>
              </div>
            </div>
            {/* right  */}
            <div className="md:flex justify-center items-center hidden">
              <div className="circle w-[21rem] h-[21rem] relative lg:my-0 my-14">
                <Image
                  src="/images/circle2.jpg"
                  alt="circle"
                  width={400}
                  height={400}
                />
                <div className="image w-full absolute bottom-12 right-4 ">
                  <Image
                    src="/images/hero-img.png"
                    alt="hero-image"
                    width={400}
                    height={400}
                    className="transform scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="bg-sky text-black rounded-lg py-2 px-3 text-center w-[18rem] sm:w-[40rem] mx-auto text-[0.8rem] sm:text-[0.9rem] tracking-wider my-5 lg:text-nowrap text-wrap">
            Ready to transform your vision into a{" "}
            <span className="text-white text-[0.9rem] smtext-[1rem] tracking-wider">
              Digital Masterpiece?
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
