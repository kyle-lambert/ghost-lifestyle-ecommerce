import React from "react";
import "./CopyrightBanner.scss";

const year = new Date().getFullYear();

function CopyrightBanner(props) {
  return (
    <div className="CopyrightBanner">
      <p className="CopyrightBanner-text">
        {`Designed and built by Kyle Lambert, inspiration from Ghost Lifestyle. Copyright ${year}`}
      </p>
    </div>
  );
}

export default CopyrightBanner;
