import React from "react";
import Skills from "../components/Skills";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skill | Portfolio",
};
const SkillPage = () => {
  return (
    <section>
      <Skills />;
    </section>
  );
};

export default SkillPage;
