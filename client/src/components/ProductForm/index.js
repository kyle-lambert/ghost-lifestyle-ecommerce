import React from "react";
import * as S from "./StyledProductForm.js";

import Icon from "../../components/Icon";
import Button from "../../components/Button";
import FavoriteToggle from "../../components/FavoriteToggle";

function SelectBar({ children }) {
  return (
    <S.SelectBar>
      {children}
      <span className="icon">
        <Icon expandMore />
      </span>
    </S.SelectBar>
  );
}

function ProductForm({
  handleFormSubmit,
  flavour,
  handleFlavourChange,
  flavours,
  handleQtyChange,
  qty,
  product,
}) {
  return (
    <S.Form onSubmit={handleFormSubmit}>
      <S.SelectGroup>
        <S.FlavourSelect>
          <label className="label">Flavour</label>
          <SelectBar>
            <select
              value={flavour ? flavour.id : ""}
              onChange={handleFlavourChange}
              className="select">
              {flavours.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
          </SelectBar>
        </S.FlavourSelect>
        <S.QtySelect>
          <label className="label">Quantity</label>
          <SelectBar>
            <select value={qty} onChange={handleQtyChange} className="select">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </SelectBar>
        </S.QtySelect>
      </S.SelectGroup>
      <S.CTAList>
        <li className="item">
          <Button onSubmit={handleFormSubmit} type="submit">
            Add To Cart
          </Button>
        </li>
        <li className="item">
          <FavoriteToggle product={product} />
        </li>
        <li className="item">
          <S.Price>${product.price}</S.Price>
        </li>
      </S.CTAList>
    </S.Form>
  );
}

export default ProductForm;
