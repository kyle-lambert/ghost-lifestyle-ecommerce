import React from "react";
import "./SectionGrid.scss";

function SectionGrid({ children }) {
  return (
    <section className="SectionGrid">
      <div className="SectionGrid-content">{children}</div>
    </section>
  );
}

export default SectionGrid;
