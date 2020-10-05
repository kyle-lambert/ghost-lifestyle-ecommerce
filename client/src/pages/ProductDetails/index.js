import React, { useState } from "react";
import "./ProductDetails.scss";

import ProductDetailsHero from "../../components/ProductDetailsHero";

import ProteinImage from "../../assets/chips-ahoy.png";
import SectionGrid from "../../layout/SectionGrid";

function ProductDetails(props) {
  const [quantityValue, setQuantityValue] = useState(1);
  const [flavourValue, setFlavourValue] = useState(() => {
    const value = product.flavours[0].name;
    return value;
  });

  const handleSelectChange = (e) => {
    const target = e.currentTarget;
    if (target.name === "productFlavour") setFlavourValue(target.value);
    if (target.name === "productQuantity")
      setQuantityValue(Number.parseInt(target.value));
  };

  return (
    <main className="ProductDetails">
      <SectionGrid>
        <ProductDetailsHero
          product={product}
          handleSelectChange={handleSelectChange}
          flavourValue={flavourValue}
          quantityValue={quantityValue}
        />
      </SectionGrid>
    </main>
  );
}

export default ProductDetails;

const product = {
  id: 1,
  name: "Whey X Chips Ahoy!",
  image: ProteinImage,
  flavour: "Marshmallow Cereal Milk®",
  category: "Protein",
  price: 29.99,
  summary:
    "GHOST® Vegan Protein combines a premium, fully disclosed vegan protein blend with industry-leading flavors...what more could you ask for?",
  flavours: [
    {
      name: "Watermelon Crush",
    },
    {
      name: "Sour Green Apple",
    },
    {
      name: "Blueberry Power Blast",
    },
    {
      name: "Warheads Coffee Sour",
    },
  ],
};
