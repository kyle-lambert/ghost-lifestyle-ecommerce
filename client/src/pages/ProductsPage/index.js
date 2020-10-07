import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./StyledProductsPage.js";

import ProteinImage from "../../assets/chips-ahoy.png";
import BCAAImage from "../../assets/kiwi-strawberry.png";

import Heading from "../../components/Heading";
import PageContainer from "../../layout/PageContainer";
import ProductCard from "../../components/ProductCard";

const filters = [
  { category: "Shop All", value: "shop-all" },
  { category: "Protein", value: "protein" },
  { category: "Fat Burner", value: "fat-burner" },
  { category: "Amino Acids", value: "amino-acids" },
  { category: "Vegan", value: "vegan" },
];

function ProductsPage(props) {
  const [selected, setSelected] = useState("protein");

  return (
    <>
      <PageContainer>
        <S.Wrapper>
          <S.Filter>
            <S.FilterList>
              <Heading h4>
                Filter <br /> Products
              </Heading>
              {filters.map((filter) => (
                <li key={uuidv4()} className="item">
                  <S.Button
                    selected={selected === filter.value}
                    disabled={selected === filter.value}
                    onClick={() => setSelected(filter.value)}>
                    {filter.category}
                  </S.Button>
                </li>
              ))}
            </S.FilterList>
          </S.Filter>
          <S.Cards>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </S.Cards>
        </S.Wrapper>
      </PageContainer>
    </>
  );
}

export default ProductsPage;

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
    image: BCAAImage,
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
