import React from "react";

function Winners() {
  return (
    <section className="content">
      <h2>Winners & Prizes</h2>

      <p className="prize-note">
        Congratulations to all the winning teams. The following prizes were
        awarded based on overall performance, innovation, and impact in the Hackathon.
      </p>

      {/* Prize Summary */}
      <div className="prize-box">
        <ul>
          <li>
            <strong>Winning Team:</strong> Sponsored trip to Goa (travel &
            stay) supported by Replit HQ
          </li>
          <li>
            <strong>First Runner Up:</strong> ₹4,000 Decathlon gift vouchers
            per team
          </li>
          <li>
            <strong>Second Runner Up:</strong> ₹2,000 Decathlon gift vouchers
            per team
          </li>
        </ul>
      </div>

      {/* First Prize */}
      <div className="winner-card first">
        <h3>Winning Team</h3>
        <ul>
          <li>Goutham V</li>
          <li>Gokul Krishna S</li>
          <li>John Nikhil G</li>
          <li>Nithin K Y</li>
        </ul>
      </div>

      {/* First Runner Up */}
      <div className="winner-card second">
        <h3>First Runner Up</h3>
        <ul>
          <li>Nikhil K</li>
          <li>Mohammed Faiz</li>
          <li>Johan K George</li>
          <li>Kavana D</li>
        </ul>
      </div>

      {/* Second Runner Up */}
      <div className="winner-card third">
        <h3>Second Runner Up</h3>
        <ul>
          <li>Pavan Tej K</li>
          <li>Jayalaksmi V</li>
          <li>Kousalya R</li>
          <li>Monalisa S</li>
        </ul>
      </div>
    </section>
  );
}

export default Winners;
