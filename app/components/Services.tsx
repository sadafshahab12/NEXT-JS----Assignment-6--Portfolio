"use client";
import React from "react";
import MyServices from "./MyServices";
import { useRouter } from "next/navigation";

const Services = () => {
  const route = useRouter();
  return (
    <>
      <section className="py-7">
        <div className="pt-7 mx-auto">
          <h1 className="text-[1.2rem] md:text-[2.1rem] font-black text-center">
            My Awesome <span className="text-red">Services</span>{" "}
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 xs:grid-cols-2 gap-5 px-3 lg:px-10 py-2 lg:py-5 ">
          <div className="card">
            <MyServices
              src="/images/responsive.png"
              h1="Responsive Web"
              h2=" Design"
              p="Crafting designs that look great on all devices."
            />
          </div>
          <div className="card">
            <MyServices
              src="/images/spa1.png"
              h1="Single Page"
              h2="Applications"
              p="Building fast and efficient SPAs for seamless user experiences."
            />
          </div>
          <div className="card">
            <MyServices
              src="/images/integration.png"
              h1=" Framework "
              h2="Integration (Next JS)"
              p="Integrating modern frameworks for dynamic, responsive web applications."
            />
          </div>
          <div className="card">
            <MyServices
              src="/images/uiux.png"
              h1="UI/UX"
              h2=" Design"
              p="Creating intuitive interfaces that enhance user engagement."
            />
          </div>
          <div className="card">
            <MyServices
              src="/images/crossbrowser.webp"
              h1="Cross-Browser"
              h2="Compatibility"
              p="Delivering a consistent user experience across all major browsers."
            />
          </div>
          <div className="card">
            <MyServices
              src="/images/git.png"
              h1="Version"
              h2="Control"
              p="Using version control systems like Git for collaborative development."
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => route.push("https://github.com/sadafshahab12")}
            className="text-[0.9rem] bg-black text-white py-3 px-5 text-center mx-auto block"
          >
            Get Started Today
          </button>
        </div>
      </section>
      <section className="flex gap-[10rem] justify-center"></section>
    </>
  );
};

export default Services;
