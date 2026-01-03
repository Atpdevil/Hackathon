import React, { useState } from "react";

function UseCaseAccordion({ code, title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="usecase">
      <div
        className="usecase-header"
        onClick={() => setOpen(!open)}
      >
        <span className="usecase-title">
          {code} – {title}
        </span>

        <span className={`icon ${open ? "open" : ""}`}>
          {open ? "−" : "+"}
        </span>
      </div>

      <div className={`usecase-body ${open ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default UseCaseAccordion;
