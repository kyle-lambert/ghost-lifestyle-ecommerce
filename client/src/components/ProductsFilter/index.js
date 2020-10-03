import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./ProductsFilter.scss";

const categories = [
  {
    name: "Shop All",
  },
  {
    name: "Protein",
  },
  {
    name: "Fat Burner",
  },
  {
    name: "Amino Acids",
  },
  {
    name: "Vegan",
  },
];

function ProductsFilter(props) {
  return (
    <div className="ProductsFilter">
      <h2 className="ProductsFilter-title">
        Filter <br /> Products
      </h2>
      <ul className="ProductsFilter-list">
        {categories.map((c, i) => (
          <li key={uuidv4()} className="ProductsFilter-item">
            <button
              data-selected={i === 1}
              disabled={i === 1}
              type="button"
              className="ProductsFilter-btn">
              {c.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsFilter;
