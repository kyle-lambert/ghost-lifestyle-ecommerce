import React from "react";
import "./ProductDetailsHero.scss";

import ImageSpacer from "../../layout/ImageSpacer";
import SelectChoice from "../../components/SelectChoice";
import ProductDetailsHeroCTA from "../../components/ProductDetailsHeroCTA";

const qtyOptions = [
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
];

function ProductDetailsHero({
  product,
  handleSelectChange,
  flavourValue,
  quantityValue,
}) {
  return (
    <div className="ProductDetailsHero">
      <div className="ProductDetailsHero-picture">
        <ImageSpacer>
          <img
            src={product.image}
            alt={product.name}
            className="ProductDetailsHero-img"
          />
        </ImageSpacer>
      </div>
      <div className="ProductDetailsHero-content">
        <h1 className="ProductDetailsHero-name">{product.name}</h1>
        <p className="ProductDetailsHero-summary">{product.summary}</p>
        <ul className="ProductDetailsHero-select">
          <li className="ProductDetailsHero-flavour">
            <SelectChoice
              label="Flavour"
              options={product.flavours}
              handleSelectChange={handleSelectChange}
              selectValue={flavourValue}
              selectName="productFlavour"
            />
          </li>
          <li className="ProductDetailsHero-qty">
            <SelectChoice
              label="Quantity"
              options={qtyOptions}
              handleSelectChange={handleSelectChange}
              selectValue={quantityValue}
              selectName="productQuantity"
            />
          </li>
        </ul>
        <ProductDetailsHeroCTA price={product.price} />
      </div>
    </div>
  );
}

export default ProductDetailsHero;
