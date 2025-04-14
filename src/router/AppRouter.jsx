import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home/Home";
import News from "../pages/News/News";
import Specialties from "../pages/Specialties/Specialties";
import OpenDoors from "../pages/OpenDoors/OpenDoors";
import Timetable from "../pages/Timetable/Timetable";
import IntroductoryCampaign from "../pages/IntroductoryCampaign/IntroductoryCampaign";
import Distance from "../pages/Distance/Distance";
import Club from "../pages/Club/Club";
import About from "../pages/About/About";
import Documets from "../pages/Documents/Documets";
import Professional from "../pages/Professional/Professional";
// specialities
import SoftwareDevelopment from "../pages/SpecialtiesPage/SoftwareDevelopment";
import InformationSystemsProgramming from "../pages/SpecialtiesPage/InformationSystemsProgramming";
import CarMaintenance from "../pages/SpecialtiesPage/CarMaintenance";
import ElectricalInstallation from "../pages/SpecialtiesPage/ElectricalInstallation";
import ElectricalEquipmentMaintenance from "../pages/SpecialtiesPage/ElectricalEquipmentMaintenance";
import WaterSupplyAndSewerage from "../pages/SpecialtiesPage/WaterSupplyAndSewerage";
import EngineSystemsMaintenance from "../pages/SpecialtiesPage/EngineSystemsMaintenance";
import ComputerNetworks from "../pages/SpecialtiesPage/ComputerNetworks";
import ComputerSystemsComplexes from "../pages/SpecialtiesPage/ComputerSystemsComplexes";
import NetworkAdministration from "../pages/SpecialtiesPage/NetworkAdministration";
import PhysicalEducation from "../pages/SpecialtiesPage/PhysicalEducation";
import MechatronicsRobotics from "../pages/SpecialtiesPage/MechatronicsRobotics";
import SpecialtyTest from "../pages/SpecialtyTest/SpecialtyTest";
// Terms
import DataProcessingTerms from "../pages/Terms/DataProcessingTerms";
import PrivacyPolicy from "../pages/Privacy/PrivacyPolicy";

// Shared
import ScrollToTop from "./scrollToTop";
import PageTransition from "../components/shared/PageTransition/PageTransition";


const AppRoutes = () => {
  return (
    <>
      <Router basename="/dpk-site">
        <ScrollToTop/>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/specialities" element={<Specialties/>}/>
              <Route path="/opendoorsEvent" element={<OpenDoors/>}/>
              <Route path="/timetable" element={<Timetable/>}/>
              <Route path="/introductory" element={<IntroductoryCampaign/>}/>
              <Route path="/distance" element={<Distance/>}/>
              <Route path="/club" element={<Club/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/documents" element={<Documets/>}/>
              <Route path="/professionalitet" element={<Professional/>}/>
              {/*specialities*/}
              <Route path='/specialities/software-development' element={<SoftwareDevelopment/>}/>
              <Route path='/specialities/information-systems-programming' element={<InformationSystemsProgramming/>}/>
              <Route path='/specialities/car-maintenance' element={<CarMaintenance/>}/>
              <Route path='/specialities/electrical-installation' element={<ElectricalInstallation/>}/>
              <Route path='/specialities/electrical-equipment-maintenance' element={<ElectricalEquipmentMaintenance/>}/>
              <Route path='/specialities/water-supply-and-sewerage' element={<WaterSupplyAndSewerage/>}/>
              <Route path='/specialities/engine-systems-maintenance' element={<EngineSystemsMaintenance/>}/>
              <Route path='/specialities/computer-networks' element={<ComputerNetworks/>}/>
              <Route path='/specialities/computer-systems-complexes' element={<ComputerSystemsComplexes/>}/>
              <Route path='/specialities/network-administration' element={<NetworkAdministration/>}/>
              <Route path='/specialities/physical-education' element={<PhysicalEducation/>}/>
              <Route path='/specialities/mechatronics-robotics' element={<MechatronicsRobotics/>}/>
              {/*test*/}
              <Route path="/specialities/test" element={<SpecialtyTest/>}/>
              {/*Terms*/}
              <Route path='/terms/data-processing' element={<DataProcessingTerms/>}/>
              {/*Privacy*/}
              <Route path='/privacy' element={<PrivacyPolicy/>}/>
            </Route>
          </Routes>
        </PageTransition>
      </Router>
    </>
  );
};

export default AppRoutes;
