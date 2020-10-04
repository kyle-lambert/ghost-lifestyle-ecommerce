import React from "react";
import "./SelectGroup.scss";

import SelectChoice from "../SelectChoice";

const FLAVOUR = "Flavour";
const FLAVOUR_SELECT = "flavourSelect";
const QUANTITY = "Quantity";
const QUANTITY_SELECT = "quantitySelect";

const quantityOptions = [
  { value: 1, name: "1" },
  { value: 2, name: "2" },
  { value: 3, name: "3" },
  { value: 4, name: "4" },
  { value: 5, name: "5" },
];

function SelectGroup({ options }) {
  return (
    <ul className="SelectGroup">
      <li className="SelectGroup-flavour">
        <SelectChoice name={FLAVOUR} id={FLAVOUR_SELECT} options={options} />
      </li>
      <li className="SelectGroup-qty">
        <SelectChoice
          name={QUANTITY}
          id={QUANTITY_SELECT}
          options={quantityOptions}
        />
      </li>
    </ul>
  );
}

export default SelectGroup;
