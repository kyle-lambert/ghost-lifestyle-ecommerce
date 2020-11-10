import React from "react";
import * as S from "./StyledOrderSummary.js";

import OrderSummaryProduct from "../../components/OrderSummaryProduct";

function OrderSummary({ shoppingCart, removeFromCart, total }) {
  return (
    <S.Wrapper>
      <S.ItemCount>
        <span className="span">Your Products</span>
        <span className="count">{`${shoppingCart.length} Items`}</span>
      </S.ItemCount>
      <S.OrderSummaryList>
        {shoppingCart.map((item) => {
          return (
            <OrderSummaryProduct
              key={item.cartItemId}
              checkoutItem={item}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </S.OrderSummaryList>
      <S.PricesList>
        <li className="item">
          <S.Label>Subtotal:</S.Label>
          <S.Amount>{`$${total.toFixed(2)}`}</S.Amount>
        </li>
        <li className="item">
          <S.Label>Shipping:</S.Label>
          <S.Amount>$0.00</S.Amount>
        </li>
        <li className="item">
          <S.Label>Total:</S.Label>
          <S.Amount>{`$${total.toFixed(2)}`}</S.Amount>
        </li>
      </S.PricesList>
    </S.Wrapper>
  );
}

export default OrderSummary;
