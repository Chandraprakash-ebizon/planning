import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TimeLine(){

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sectionTitles = [
        "Task - Task 1",
        "Task - Task 2",
        "Task - Task 3",
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
        <h2 className="title">RESOURCE TIMELINE TASK</h2>
        <form id="submit-form" style={{
          overflowY: 'scroll',
          }}>
            <h3 style={{marginTop: '5%'}}>{sectionTitles[currentSectionIndex]}</h3>
            <div className="comp">
            <div className="date-cont" style={{marginTop: '8%'}}>
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
            <label htmlFor="">Resources</label>
            <Box
                sx={{
                    width: 700,
                    maxWidth: '100%',
                    marginTop: 2,
                    marginBottom: 5,
                }}
            >
            <TextField className="txt" fullWidth label="Enter your Resources" id="fullWidth" multiline rows={6} />
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

export default TimeLine;