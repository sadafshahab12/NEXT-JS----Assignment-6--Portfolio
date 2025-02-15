import React from "react";
import Projects from "../components/Project";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Project | Portfolio",
};
const Project = () => {
  return (
    <>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Project;
