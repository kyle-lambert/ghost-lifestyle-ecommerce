import React from "react";
import "./ProductDetails.scss";

import ProteinImage from "../../assets/chips-ahoy.png";

import ImageSpacer from "../../layout/ImageSpacer";
import BrandLogo from "../../components/BrandLogo";
import SelectGroup from "../../components/SelectGroup";

function ProductDetails(props) {
  return (
    <main className="ProductDetails">
      <div className="ProductDetails-inner">
        <div className="ProductDetails-top">
          <div className="ProductDetails-left">
            <ImageSpacer>
              <img
                src={product.image}
                alt={product.name}
                className="ProductDetails-img"
              />
            </ImageSpacer>
          </div>
          <div className="ProductDetails-right">
            <BrandLogo dark />
            <h1 className="ProductDetails-name">{product.name}</h1>
            <p className="ProductDetails-summary">{product.summary}</p>
            <SelectGroup options={product.flavours} />
          </div>
        </div>
        <div className="ProductDetails-bottom"></div>
      </div>
    </main>
  );
}

export default ProductDetails;

const product = {
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
      value: "Watermelon Crush",
      name: "Watermelon Crush",
    },
    {
      id: 2,
      value: "Watermelon Crush",
      name: "Sour Green Apple",
    },
    {
      id: 1,
      value: "Blueberry Power Blast",
      name: "Blueberry Power Blast",
    },
    {
      id: 2,
      value: "Warheads Coffee Sour",
      name: "Warheads Coffee Sour",
    },
  ],
};
