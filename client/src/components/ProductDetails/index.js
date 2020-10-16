import React from "react";
import * as S from "./StyledProductDetails.js";

import { shippingReturnsInfo } from "../../data";

function ProductDetails({ product }) {
  const [tabId, setTabId] = React.useState(1);

  const handleClick = (e) => {
    setTabId(Number.parseInt(e.target.dataset.id));
  };

  return (
    <S.DetailsContainer>
      <S.TabList>
        <li className="item">
          <S.TabButton onClick={handleClick} data-id={1} disabled={tabId === 1}>
            Product Details
          </S.TabButton>
        </li>
        <li className="item">
          <S.TabButton onClick={handleClick} data-id={2} disabled={tabId === 2}>
            Shipping & Returns
          </S.TabButton>
        </li>
      </S.TabList>
      <S.ContentBox>
        {tabId === 1 && (
          <S.ContentList>
            {product &&
              product.details.map((d) => (
                <li key={d.id} className="item">
                  <S.Label>{d.label}</S.Label>
                  <p className="description">{d.description}</p>
                </li>
              ))}
          </S.ContentList>
        )}
        {tabId === 2 && (
          <S.ContentList>
            {shippingReturnsInfo.map((i) => (
              <li key={i.id} className="item">
                <S.Label>{i.label}</S.Label>
                <p className="description">{i.description}</p>
              </li>
            ))}
          </S.ContentList>
        )}
      </S.ContentBox>
    </S.DetailsContainer>
  );
}

export default ProductDetails;
