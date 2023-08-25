import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Documentation(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "Category - Workload Components ",
        "Category - HUB-Spoke VCN",
        "Category - CI/CD - HUB-Spoke VCN",
        "Category - CI/CD-DRG",
        "Category - DRG",
        "Category - External Network Connectivity",
        "Category - CI/CD - Observability & Management",
        "Category - Security Zones (Document and Implement)",
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
        <h2 className="title">DOCUMENTAION</h2>
        <form id="submit-form"  style={{
          overflowY: 'scroll',
        }}>
            <h3>{sectionTitles[currentSectionIndex]}</h3>
            <div className="comp">
            <label htmlFor="">Components</label>
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
                <div className="date-cont">
                    <div className="date-input">
                        <label htmlFor="">Start Date</label>
                        <input className="date" type="date" />
                    </div>
                    <div className="date-input1">
                        <label htmlFor="">End Date</label>
                        <input className="date" type="date" />
                    </div>
                    .
                </div>
                <div className="drop">
                    <label for="status">Status</label>
                    <select id="slct" required>
                        <option value="" disabled selected>Select option</option>
                        <option value="notstarted">Not Started</option>
                        <option value="planned">Planned</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            <label htmlFor="">Assigned</label>
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
            <label htmlFor="">Comments (If any)</label>
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

export default Documentation;