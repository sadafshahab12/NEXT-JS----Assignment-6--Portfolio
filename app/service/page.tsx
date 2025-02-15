import React from "react";
import Services from "../components/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Service | Portfolio",
};
const Service = () => {
  return (
    <section>
      <Services />;
    </section>
  );
};

export default Service;
