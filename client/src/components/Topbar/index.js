import React from "react";
import "./Topbar.scss";

import { ReactComponent as Close } from "../../assets/icons/close.svg";

function Topbar({ title, handleClose }) {
  return (
    <div className="Topbar">
      <span className="Topbar-title">{title}</span>
      <button type="button" onClick={handleClose} className="Topbar-close">
        <Close />
      </button>
    </div>
  );
}

export default Topbar;
