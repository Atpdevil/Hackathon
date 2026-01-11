import React from "react";

function Winners() {
  return (
    <section className="content">
      <h2>Winners & Prizes</h2>

      <p className="prize-note">
        Congratulations to all the winning teams. The following prizes were
        awarded based on overall performance, innovation, and impact in the Hackathon.
      </p>

      <div className="prize-box">
        <ul>
          <li>
            <strong>Winning Team:</strong> Sponsored trip to Goa (travel &
            stay) supported by Replit HQ
          </li>
          <li>
            <strong>First Runner Up:</strong> ₹8,000 Decathlon gift vouchers
            per team
          </li>
          <li>
            <strong>Second Runner Up:</strong> ₹4,000 Decathlon gift vouchers
            per team
          </li>
        </ul>
      </div>

      <div className="winner-card first">
        <h3>Winners</h3>
        <ul>
          <li>Goutham V - 1AM23CS068</li>
          <li>Gokul Krishna S - 1AM23CS067</li>
          <li>John Nikhil G - 1AM23CS076</li>
          <li>Nithin K Y - 1AM23CS124</li>
        </ul>
      </div>

      <div className="winner-card second">
        <h3>First Runner Up</h3>
        <ul>
          <li>Nikhil K - 1AM23CS112</li>
          <li>Mohammed Faiz - 1AM23CS111</li>
          <li>Johan K George - 1AM23CS075</li>
          <li>Kavana D - 1AM23CS085</li>
        </ul>
      </div>

      <div className="winner-card third">
        <h3>Second Runner Up</h3>
        <ul>
          <li>Pavan Tej K - 1AM23CS134</li>
          <li>Jayalaksmi V - 1AM23CS073</li>
          <li>Kousalya R - 1AM23CS089</li>
          <li>Monalisa S - 1AM23CS117</li>
        </ul>
      </div>
    </section>
  );
}

export default Winners;
