import React from "react";
import "./Products.scss";

import ProteinImage from "../../assets/chips-ahoy.png";
import ProductsFilter from "../../components/ProductsFilter";
import ProductCard from "../../components/ProductCard";

function Products(props) {
  return (
    <div className="Products">
      <div className="Products-inner">
        <div className="Products-filter">
          <ProductsFilter />
        </div>
        <div className="Products-list">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;

const products = [
  {
    id: 1,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 29.99,
    summary:
      "GHOST® Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    flavours: [
      {
        id: 1,
        name: "Watermelon Crush",
      },
      {
        id: 2,
        name: "Sour Green Apple",
      },
    ],
  },
  {
    id: 2,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 29.99,
    summary:
      "GHOST® Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
    flavours: [
      {
        id: 1,
        name: "Watermelon Crush",
      },
      {
        id: 2,
        name: "Sour Green Apple",
      },
    ],
  },
  {
    id: 3,
    name: "Whey X Chips Ahoy!",
    image: ProteinImage,
    flavour: "Marshmallow Cereal Milk®",
    price: 29.99,
    summary:
      "GHOST® Vegan Protein combines a premium, fully disclosed vegan protein blend",
    flavours: [
      {
        id: 1,
        name: "Watermelon Crush",
      },
      {
        id: 2,
        name: "Sour Green Apple",
      },
    ],
  },
];
