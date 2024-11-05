import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import AboutUs from '../pages/about_us';
import Services from '../pages/services';
import Contact from '../pages/contact';
import Portofolio from '../pages/portofolio';

// Import service pages from the correct location
import CustomSoftware from '../pages/services/csd';
import MobileAppDev from '../pages/services/mad';
import WebAppDev from '../pages/services/wad';
import UXDesign from '../pages/services/ux';
import EnterpriseSoftware from '../pages/services/esd';
import SystemIntegration from '../pages/services/si';
import SoftwareMaintenance from '../pages/services/sms';
import ITConsultation from '../pages/services/kitd';
import CloudDevelopment from '../pages/services/cbsd';
import TestingQA from '../pages/services/tqa';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/custom-software-development" element={<CustomSoftware />} />
      <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
      <Route path="/services/web-application-development" element={<WebAppDev />} />
      <Route path="/services/ui-ux-design" element={<UXDesign />} />
      <Route path="/services/enterprise-software" element={<EnterpriseSoftware />} />
      <Route path="/services/system-integration" element={<SystemIntegration />} />
      <Route path="/services/software-maintenance" element={<SoftwareMaintenance />} />
      <Route path="/services/it-consultation" element={<ITConsultation />} />
      <Route path="/services/cloud-development" element={<CloudDevelopment />} />
      <Route path="/services/testing-qa" element={<TestingQA />} />
    </Routes>
  );
};
