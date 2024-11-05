import React from "react";
import Introduction from "../components/home_components/introduction_home";
import ServiceHome from "../components/home_components/service_home";
import InfoSection from "../components/home_components/info_home";

const Home = () => {
  return (
    <>
      <div>
        <Introduction />

        <ServiceHome />

        <InfoSection />
      </div>
    </>
  );
};

export default Home;
