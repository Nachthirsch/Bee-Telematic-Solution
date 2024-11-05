import React from "react";
import InfoServices from "../components/services_components/info_services";
import ListServices from "../components/services_components/list_services";
import DetailServices from "../components/services_components/detail_services";

const Services = () => {
  return (
    <>
      <div>
        <InfoServices id="layanan" />
        <ListServices />
        <DetailServices />
      </div>
    </>
  );
};

export default Services;
