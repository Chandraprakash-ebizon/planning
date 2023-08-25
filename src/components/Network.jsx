import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Network(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "Description - DRG",
        "Description - Document  specification and implementation",
        "Description - External Network Connectivity - Fastconnect + Express route",
        "Description - OIC Connectivity Agents VM",
        "Description - Load Balancers",
        "Description - NLB and ALB",
        "Description - Document  specification and implementation",
        "Description - Create DRG",
        "Description - Create DRG Attachments for Site to Site VPN",
        "Description - Create DRG Attachments for FastConnect Virtual Circuits",
        "Description - Create DRG Attachments for VCN - HUB, Spoke",
        "Description - Domain",
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
        <h2 className="title">TYPE - NETWORK</h2>
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
              <input className="btn sum" type="submit" value="SUBMIT" style={{marginLeft: '22%'}} />
            )}
          </div>
          </div>
    </form>
    </div>
</main>
    );
}

export default Network;