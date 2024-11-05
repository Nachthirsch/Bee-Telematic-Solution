import React from "react";
import AboutSection from "../components/about_components/info_about";
import TechPartners from "../components/about_components/techpartner_about";
import PrinciplesSection from "../components/about_components/principle_about";
import ValuesSection from "../components/about_components/values_about";
import RolesAbout from "../components/about_components/roles_about";

const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <TechPartners />
      <PrinciplesSection />
      <ValuesSection />
      <RolesAbout />
    </>
  );
};

export default AboutUs;
