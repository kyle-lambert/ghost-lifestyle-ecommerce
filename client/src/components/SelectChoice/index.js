import React from "react";
import "./SelectChoice.scss";

import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more.svg";

function SelectChoice({ name, id, options }) {
  return (
    <div className="SelectChoice">
      <label htmlFor={id} className="SelectChoice-label">
        {name}:
      </label>
      <div className="SelectChoice-bar">
        <select name={name} id={id} className="SelectChoice-select">
          {options.map((opt) => (
            <option value={opt.value} className="SelectChoice-option">
              {opt.name}
            </option>
          ))}
        </select>
        <span className="SelectChoice-icon">
          <ExpandMore />
        </span>
      </div>
    </div>
  );
}

export default SelectChoice;
