import React, { useState } from "react";
import * as S from "./StyledDetailsPage.js";

import ImageSpacer from "../../components/ImageSpacer";
import BrandLogo from "../../components/BrandLogo";
import FormSelect from "../../components/FormSelect";
import FavoriteToggle from "../../components/FavoriteToggle";

import ProteinImage from "../../assets/chips-ahoy.png";

function DetailsPage(props) {
  const [flavour, setFlavour] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const handleChange = (name, value) => {
    value = Number.parseInt(value);
    if (name === "flavour") setFlavour(value);
    if (name === "quantity") setQuantity(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <S.PageWrapper>
      <S.HeroContainer>
        <div className="content">
          <BrandLogo />
          <S.Heading>{product.name}</S.Heading>
          <S.Text>{product.summary}</S.Text>
          <S.Form onSubmit={handleSubmit}>
            <S.SelectGroup>
              <div className="flavour">
                <FormSelect
                  label="Flavour"
                  options={product.flavours}
                  selectedValue={flavour}
                  selectName="flavour"
                  handleChange={handleChange}
                />
              </div>
              <div className="qty">
                <FormSelect
                  label="Quantity"
                  options={quantityOptions}
                  selectedValue={quantity}
                  selectName="quantity"
                  handleChange={handleChange}
                />
              </div>
            </S.SelectGroup>
            <S.CTAList>
              <li className="item">
                <S.ATCButton type="submit">Add To Cart</S.ATCButton>
              </li>
              <li className="item">
                <FavoriteToggle />
              </li>
              <li className="item">
                <S.Price>${product.price}</S.Price>
              </li>
            </S.CTAList>
          </S.Form>
        </div>
        <div className="picture">
          <ImageSpacer src={product.image} alt={product.name} />
        </div>
      </S.HeroContainer>
    </S.PageWrapper>
  );
}

export default DetailsPage;

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
      id: 1,
      name: "Watermelon Crush",
      value: "watermelon-crush",
    },
    {
      id: 2,
      name: "Sour Green Apple",
      value: "sour-green-apple",
    },
    {
      id: 3,
      name: "Blueberry Power Blast",
      value: "blueberry-power-blast",
    },
    {
      id: 4,
      name: "Warheads Coffee Sour",
      value: "warheads-coffee-sour",
    },
  ],
};

const quantityOptions = [
  { value: 1, name: 1, id: 1 },
  { value: 2, name: 2, id: 2 },
  { value: 3, name: 3, id: 3 },
  { value: 4, name: 4, id: 4 },
  { value: 5, name: 5, id: 5 },
];
