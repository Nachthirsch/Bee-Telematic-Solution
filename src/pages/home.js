import React from "react";
import Introduction from "../components/home_components/introduction_home";
import ServiceHome from "../components/home_components/service_home";
import InfoSection from "../components/home_components/info_home";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Introduction />
      <div className="flex-1 bg-amber-50">
        <ServiceHome />
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;
