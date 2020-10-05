import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./SelectChoice.scss";

import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more.svg";

function SelectChoice({
  label,
  options,
  handleSelectChange,
  selectValue,
  selectName,
}) {
  return (
    <div className="SelectChoice">
      <label className="SelectChoice-label">{label}</label>
      <div className="SelectChoice-bar">
        <select
          onChange={handleSelectChange}
          name={selectName}
          value={selectValue}
          className="SelectChoice-select">
          {options.map((opt) => (
            <option
              key={uuidv4()}
              value={opt.name}
              className="SelectChoice-option">
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
