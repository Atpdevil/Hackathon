import React from "react";

function EventInfo() {
  return (
    <section className="event-wrapper">
      {/* Date + Location */}
      <div className="event-meta">
        <div className="meta-left">
        </div>

        <div className="meta-right">
          <h3>Monday, 12 Janauary 2026</h3>
          <p className="time">8:30 am – 5:30 pm</p>

          <div className="location">
            
            <div>
              <strong>AMC Engineeing College</strong>
              <p>Bengaluru, Karnataka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Closed */}
      <div className="registration-card">
        <div className="reg-header">Registration</div>

        <div className="reg-body">
          <div className="reg-title">
            <span className="reg-icon">⛔</span>
            Registration Closed
          </div>

          <p>
            This event has concluded successfully. Thank you to all participants
            for taking part in the Hackathon.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
