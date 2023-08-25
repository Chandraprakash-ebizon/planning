import React, { useState } from "react";

function Sow() {
  const [currentPage, setCurrentPage] = useState(0);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const sectionTitles = [
    "Type - OCI Implementation by EbizonCloud- Client Support",
    "Type - Assumptions",
    "Type - Implementation of IAC",
    "Type - Assumptions",
    "Type - Deliverables",
  ];

  const descriptionSets = [
    [
      "Client will do the provisioning in collaboration with Oracle for all OCI resources.",
      "Client will be responsible for securing and configuring of IAM (SSO, Federation, Policies).",
      "Client will provide the recommended group, policies, and overview of configurations based on the proposed integration architecture.",
      "Design, provisioning assistance or guidance, and support will be around the three OCI resources OIC, ATP, and Object storage OCI resources only.",
      "Required network connectivity - Fast connect and express route configuration will be performed by Client with assistance from Oracle.",
      "Client will be provided the required access to develop in the OCI resources for integrations.",
    ],
    [
      "Support Client in their effort of provisioning Oracle Integration Cloud resources in OCI, based on recommended design.",
      "Client will do the provisioning in collaboration with Oracle for all OCI resources.",
      "Client will be responsible for securing and configuring of IAM (SSO, Federation, Policies).",
      "Client will provide the recommended group, policies, and overview of configurations based on the proposed integration architecture.",
      "Design, provisioning assistance or guidance, and support will be around the three OCI resources OIC, ATP, and Object storage OCI resources only.",
      "Required network connectivity - Fast connect and express route configuration will be performed by Client with assistance from Oracle.",
      "Client will be provided the required access to develop in the OCI resources for integrations.",
    ],
    [
      "Assess and collect Dev Ops requirements – Current State.",
      "Develop IAC using Terraform for ATP, compartment, and object Storage which are part of the integration architecture complying with  standards.",
      "Develop IAC for OCI platform based on recommended architecture OIC (leverage Landing Zone template) complying with standards",
    ],
    [
      "Landing zone will be provisioned by Oracle initially.",
      "Client will develop the terraform script post the initial provisioning of the standardized environment by EbizonCloud.",
      "CI/CD Pipeline build and maintenance will be performed by Client.",
      "Client will provide the required assistance /guidelines for running the CI/CD pipeline",
    ],
    [
      "IAC Code - Dev Ops Terraform code that can be checked in to Client Github and run via Jenkins CI/CD pipeline",
    ],
  ];

  const handleNextClick = () => {
    if (currentPage + 1 < descriptionSets.length) {
      setCurrentPage(currentPage + 1);
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage - 1 >= 0) {
      setCurrentPage(currentPage - 1);
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };
  // const isLastSection = currentSectionIndex === sectionTitles.length - 1;

  const isLastPage = currentPage === descriptionSets.length - 1;

  return (
    <main>
      <div className="container">
        <h2 className="title">SOW ASSUMPTIONS AND DELIVERABLES</h2>
        <form
          id="submit-form"
          style={{
            overflowY: "scroll",
          }}
        >
         <h3>{sectionTitles[currentSectionIndex]}</h3>
          
         <h4 style={{marginBottom: '-2%'}}>Description:</h4>
          <ul style={{ padding: '20px', height: '70%'}}>
            {descriptionSets[currentPage].map((description, index) => (
              <li style={{padding: '5px'}} key={index}>{description}</li>
            ))}
          </ul>

          <div className="button-container">
            {currentPage > 0 && (
              <button className="btn prev" type="button" onClick={handlePrevClick}>
                PREVIOUS
              </button>
            )}
            {!isLastPage && (
              <button className="btn nxt" type="button" onClick={handleNextClick}>
                NEXT
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Sow;
