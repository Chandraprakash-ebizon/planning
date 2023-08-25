import React, {useState} from "react";


function Plan(){

    const tableContainerStyle = {
        width: "72%",
        margin: "0 auto",
        marginLeft: "28%",
    };

    const tableStyle = {
        width: "106%",
        borderCollapse: "collapse",
        marginTop: "1rem",
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: "10px",
        height: "550px",
        borderRadius: "10px",
        overflow: "hidden",
    };

    const thStyle = {
        backgroundColor: " #1b459c",
        color: "#fff",
        padding: "0.5rem",
        border: "1px solid #3259a6",
        fontWeight: "500",
    };

    const tdStyle = {
        padding: "0.5rem",
        fontSize: "10px",
    };

    const heading ={
        fontSize: "1.4rem",
        fontWeight: "bold",
        color: "#FF3C2C",
        textAlign: "center",
        marginBottom: "3%",
        marginTop: "5%",
        marginLeft: "15%"

    };
    

    return (
    <main>
    <div className="container">
    <div style={tableContainerStyle}>
    <p style={heading}>RESOURCE TIMELINE PLAN</p>
    <table id="customers" style={tableStyle}>
  <tr>
    <th style={thStyle}>OCI Resource Planning</th>
    <th style={thStyle}>Total</th>
    <th style={thStyle}>Week 1</th>
    <th style={thStyle}>Week 2</th>
    <th style={thStyle}>Week 3</th>
    <th style={thStyle}>Week 4</th>
    <th style={thStyle}>Week 5</th>
    <th style={thStyle}>Week 6</th>
    <th style={thStyle}>Week 7</th>
    <th style={thStyle}>Week 8</th>
    <th style={thStyle}>Week 9</th>
    <th style={thStyle}>Week 10</th>
    <th style={thStyle}>Week 11</th>
    <th style={thStyle}>Week 12</th>
    <th style={thStyle}>Week 13</th>
    <th style={thStyle}>Week 14</th>
    <th style={thStyle}>Week 15</th>
    <th style={thStyle}>SIT</th>
    <th style={thStyle}>UAT</th>
    <th style={thStyle}>PROD</th>
  </tr>
  <tr>
    <th style={thStyle}>Name 1 - OCI Lear - Hub VCN Components & IAC & integrate with CI/CD</th>
    <td style={tdStyle}>280</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
  </tr>
  <tr>
    <th style={thStyle}>Name 2 - OCI TEch - IAC - Responsible for Workload VCN related components & IAC and integrate with CI/CD</th>
    <td style={tdStyle}>880</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>100</td>
    <td style={tdStyle}>100</td>
    <td style={tdStyle}>100</td>
  </tr>
  <tr>
    <th style={thStyle}>Name 3</th>
    <td style={tdStyle}>650</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>50</td>
    <td style={tdStyle}>50</td>
    <td style={tdStyle}>50</td>
  </tr>
  <tr>
  <th style={thStyle}>Name 4</th>
    <td>574</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>50</td>
    <td style={tdStyle}>50</td>
    <td style={tdStyle}>50</td>
  </tr>
  <tr>
  <th style={thStyle}>Name 5</th>
    <td style={tdStyle}>204</td>
    <td style={tdStyle}>0</td>
    <td style={tdStyle}>0</td>
    <td style={tdStyle}>24</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
  </tr>
  <tr>
  <th style={thStyle}>Name 6</th>
    <td style={tdStyle}>204</td>
    <td style={tdStyle}></td>
    <td style={tdStyle}>0</td>
    <td style={tdStyle}>24</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
    <td style={tdStyle}></td>
  </tr>
  <tr>
  <th style={thStyle}>Name 7</th>
    <td style={tdStyle}>400</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>40</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
    <td style={tdStyle}>20</td>
  </tr>
  <tr>
  <th style={thStyle}></th>
    <td style={tdStyle}>3192</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
    <td style={tdStyle}>P</td>
  </tr>
</table>
</div>

    </div>
</main>
    );
}

export default Plan;