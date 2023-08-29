import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import ReqCollection from "./ReqCollection";
import LandingZone from "./LandingZone";
import CiCd from "./CiCd";
import Documentation from "./Documentation";
import Design from "./Design";
import Iam from "./Iam";
import Onboarding from "./Onboarding";
import WorkloadComp from "./WorkloadComp";
import VmSeries from "./VmSeries";
import Network from "./Network";
import Security from "./Security";
import Governance from "./Governance";
import PciCd from "./PciCd";
import Notification from "./Notification";
import Sow from "./Sow";
import TimeLine from "./TimeLine";
import Gpt3Example from "./Gpt3Example";
import Plan from "./Plan";
import BillOfMaterials from "./BillOfMaterials";
import ResourcePlanning from "./ResourcePlanning";
import CapacityPlanning from "./CapacityPlanning";
import Tl from "./Tl";
import SowCost from "./SowCost";
import OverviewStatus from "./OverviewStatus";
import ProjObjectives from "./ProjObjectives";
import RolesResp from "./RolesResp";
import SolArch from "./SolArch";
import SolOver from "./SolOver";
import ArchDec from "./ArchDec";

function App() {
  return (
    <Router>
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/reqcollection" element={<ReqCollection />} />
          <Route path="/overviewstatus" element={<OverviewStatus />} />
          <Route path="/projobjectives" element={<ProjObjectives />} />
          <Route path="/rolesresp" element={<RolesResp />} />
          <Route path="/solarch" element={<SolArch />} />
          <Route path="/solover" element={<SolOver />} />
          <Route path="/archdec" element={<ArchDec />} />


          <Route path="/billofmaterials" element={<BillOfMaterials />} />
          <Route path="/resourceplanning" element={<ResourcePlanning />} />
          <Route path="/capacityplanning" element={<CapacityPlanning />} />
          <Route path="/tl" element={<Tl />} />
          <Route path="/sowcost" element={<SowCost />} />

          <Route path="/landingzone" element={<LandingZone />} />
          <Route path="/cicd" element={<CiCd />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/design" element={<Design />} />
          <Route path="/iam" element={<Iam />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/workloadcomp" element={<WorkloadComp />} />
          <Route path="/vmseries" element={<VmSeries />} />
          <Route path="/network" element={<Network />} />
          <Route path="/security" element={<Security />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/pcicd" element={<PciCd />} />
          <Route path="/notification" element={<Notification />} />
          {/* <Route path="/sow" element={<Sow />} />
          <Route path="/timeline" element={<TimeLine />} />
           <Route path="/plan" element={<Plan />} /> */}
        </Routes>
        <Gpt3Example/>
      </div>
    </div>
  </Router>
  );
}

export default App;
