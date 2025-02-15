import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Services";
import Skills from "./components/Skills";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Portfolio",
};
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Service />
      <Project />
      <GetStarted />
    </>
  );
}
