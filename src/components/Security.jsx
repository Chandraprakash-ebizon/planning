import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Security(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "Description - Compartment",
        "Description - PaaS  Hardening",
        "Description - Creation of Compute Instance with Oracle Linux( 7.9, 8, 8.1, Version etc) Image",
        "Description - Creation of Golden Custom Image which includes your required applications",
        "Description - Supports Network  penetration testing",
        "Description - Supports Software the vulnerability testing",
        "Description - CIS Compliance checker and Remedy",
        "Description - Security Zones (Document and Implement)",
        "Description - Zones Policy definition",
        "Description - Security Zone Policy creation, Creation of security Zone Recipe (Documentation & Terraform)",
        "Description - Security Zone creation (Documentation & Terraform code)",
        "Description - Security zone operational documentation for each environment",
];

  const handleNextClick = () => {
    if (currentSectionIndex + 1 < sectionTitles.length) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentSectionIndex - 1 >= 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const isLastSection = currentSectionIndex === sectionTitles.length - 1;

    return (
    <main>
    <div className="container">
        <h2 className="title">TYPE - SECURITY</h2>
        <form id="submit-form" style={{
          overflowY: 'scroll',
          }}>
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            <div className="comp">
            <label htmlFor="">Status</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth" />
            </Box>
            <label htmlFor="">Comments</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 2,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your answer" id="fullWidth" multiline rows={6} />
            </Box>
            <div className="button-container">
            {currentSectionIndex > 0 && (
              <button className="btn prev" type="button" onClick={handlePrevClick}>PREVIOUS</button>
            )}
            {!isLastSection && (
              <button className="btn nxt" type="button" onClick={handleNextClick}>NEXT</button>
            )}
            {isLastSection && (
              <input className="btn sum" type="submit" value="SUBMIT"  style={{marginLeft: '22%'}} />
            )}
          </div>
          </div>
    </form>
    </div>
</main>
    );
}

export default Security;