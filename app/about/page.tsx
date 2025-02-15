import React from "react";
import About from "../components/About";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Portfolio",
};
const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default AboutPage;
