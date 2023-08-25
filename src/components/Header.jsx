import React from "react";
import { Link , useLocation } from "react-router-dom";


function Header(){

  const location = useLocation();

    return <header>
       <div className="logo">
         <img className="left-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/Picture2.png" alt="left"/>
         <img className="right-img" src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/new_logo.png" alt="right"/>
        </div>

      <div className="nav-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className={`nav-item ${location.pathname === "/reqcollection" ? "active" : ""}`}>
              <Link to="/reqcollection">Requirement Collection</Link>
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
            <li className="nav-item" style={{color: '#003DA4'}}>Project Plan</li>
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
            <li className={`nav-item ${location.pathname === "/sow" ? "active" : ""}`}>
              <Link to="/sow">SOW Assumptions and Deliverables</Link>
            </li>
           <li className={`nav-item ${location.pathname === "/timeline" ? "active" : ""}`}>
              <Link to="/timeline">Resource Timeline Task</Link>
            </li>
             <li className={`nav-item ${location.pathname === "/plan" ? "active" : ""}`}>
              <Link to="/plan">Resource Timeline Plan</Link>
            </li>
            {/*<li className={`nav-item ${location.pathname === "/cidr" ? "active" : ""}`}>
              <Link to="/cidr">CIDR</Link>
            </li>
              <li className={`nav-item ${location.pathname === "/ipsecvpn" ? "active" : ""}`}>
              <Link to="/ipsecvpn">IPSec VPN</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/fastconnect" ? "active" : ""}`}>
              <Link to="/fastconnect">Fast Connect</Link>
            </li> */}
          </ul>
        </nav>
      </div>

  </header>
}

export default Header;