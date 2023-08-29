import React, {useState} from "react";
import { Link , useLocation } from "react-router-dom";


function Header(){

  const [activeList, setActiveList] = useState(null);

  const toggleList = (listId) => {
    setActiveList(activeList === listId ? null : listId);
  };

  const location = useLocation();

    return <header>
      <div className="logo">
        <img className="left-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/Picture2.png" alt="left"/>
        <img className="right-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/new_logo.png" alt="right"/>
      </div>

      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-list">

          <li className="nav-item" onClick={() => toggleList(1)} style={{color: '#003DA4', cursor: "pointer",}}>Requirement Collection Planning</li>
          {activeList === 1 && (
          <ul style={{listStyle: 'none', marginLeft: '-5%'}}>
            <li className={`nav-item ${location.pathname === "/reqcollection" ? "active" : ""}`}>
              <Link to="/reqcollection">Requirements</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/overviewstatus" ? "active" : ""}`}>
              <Link to="/overviewstatus">Project Overview and Status</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/projobjectives" ? "active" : ""}`}>
              <Link to="/projobjectives">Project Objectives</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/rolesresp" ? "active" : ""}`}>
              <Link to="/rolesresp">Project Roles and Responsibilities</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/SolArch" ? "active" : ""}`}>
              <Link to="/SolArch">Solution Architecture Assumptions</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/SolOver" ? "active" : ""}`}>
              <Link to="/SolOver">Solution Overview</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/ArchDec" ? "active" : ""}`}>
              <Link to="/ArchDec">Architecture Decision</Link>
            </li>
            </ul>
            )}

            <li className={`nav-item ${location.pathname === "/billofmaterials" ? "active" : ""}`}>
              <Link to="/billofmaterials">Bill of Materials</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/resourceplanning" ? "active" : ""}`}>
              <Link to="/resourceplanning">Resource Planning</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/capacityplanning" ? "active" : ""}`}>
              <Link to="/capacityplanning">Capacity Planning</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/tl" ? "active" : ""}`}>
              <Link to="/tl">Timeline</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/sowcost" ? "active" : ""}`}>
              <Link to="/sowcost">SOW Cost</Link>
            </li>


            <li className={`nav-item ${location.pathname === "/landingzone" ? "active" : ""}`}>
              <Link to="/landingzone">Landing Zone</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/cicd" ? "active" : ""}`}>
              <Link to="/cicd">CI/CD</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/documentation" ? "active" : ""}`}>
              <Link to="/documentation">Documentation</Link>
            </li>


            <li className="nav-item"  onClick={() => toggleList(2)} style={{color: '#003DA4', cursor: "pointer"}}>Project Plan</li>
            {activeList === 2 && (
            <ul>
              <li className={`nav-item ${location.pathname === "/design" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/design">Design</Link>
              </li>
              <li className={`nav-item ${location.pathname === "iam" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/iam">IAM</Link>
              </li>
              <li className={`nav-item ${location.pathname === "onboarding" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/onboarding">Onboarding</Link>
              </li>
              <li className={`nav-item ${location.pathname === "workloadcomp" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/workloadcomp">Workload Components</Link>
              </li>
              <li className={`nav-item ${location.pathname === "vmseries" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/vmseries">VM Series Firewall</Link>
              </li>
              <li className={`nav-item ${location.pathname === "network" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/network">Network</Link>
              </li>
              <li className={`nav-item ${location.pathname === "security" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/security">Security</Link>
              </li>
              <li className={`nav-item ${location.pathname === "governance" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/governance">Governance</Link>
              </li>
              <li className={`nav-item ${location.pathname === "pcicd" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/pcicd">CI/CD</Link>
              </li>
              <li className={`nav-item ${location.pathname === "notification" ? "active" : ""}`} style={{listStyleType: 'none' }}>
              <Link to="/notification">Notification</Link>
              </li>
            </ul>
            )}
            {/* <li className={`nav-item ${location.pathname === "/sow" ? "active" : ""}`}>
              <Link to="/sow">SOW Assumptions and Deliverables</Link>
            </li>
           <li className={`nav-item ${location.pathname === "/timeline" ? "active" : ""}`}>
              <Link to="/timeline">Resource Timeline Task</Link>
            </li>
             <li className={`nav-item ${location.pathname === "/plan" ? "active" : ""}`}>
              <Link to="/plan">Resource Timeline Plan</Link>
            </li> */}
          </ul>
        </nav>
      </div>

  </header>
}

export default Header;