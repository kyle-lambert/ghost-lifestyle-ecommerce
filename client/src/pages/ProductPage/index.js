import React from "react";
import * as S from "./StyledProductPage.js";

import useProductContext from "../../hooks/useProductContext";
import useCartContext from "../../hooks/useCartContext";

import ImageSpacer from "../../components/ImageSpacer";
import BrandLogo from "../../components/BrandLogo";
import FormSelect from "../../components/FormSelect";
import FavoriteToggle from "../../components/FavoriteToggle";

const BASE_URL = "http://localhost:1337";

function ProductPage({ match }) {
  const slug = match.params.slug;
  const {
    dispatch,
    updateSlug,
    updateFlavour,
    updateQty,
    resetReducer,
    product,
    flavour,
    qty,
  } = useProductContext();
  const { cart, addToCart, removeFromCart, updateCartItem } = useCartContext();

  React.useEffect(() => {
    return () => {
      resetReducer(dispatch);
    };
  }, [dispatch, resetReducer]);

  React.useEffect(() => {
    updateSlug(slug, dispatch);
  }, [slug, updateSlug, dispatch]);

  const handleQtyChange = (e) => {
    const qty = Number.parseInt(e.target.value);
    updateQty(qty, dispatch);
  };

  const handleFlavourChange = (e) => {
    const id = Number.parseInt(e.target.value);
    updateFlavour(id);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToCart(product, flavour, qty);
  };

  if (product) {
    const { flavours, name, description, price } = product;
    return (
      <S.PageWrapper>
        <S.HeroContainer>
          <div className="content">
            <BrandLogo />
            <S.Heading>{name}</S.Heading>
            <S.Text>{description}</S.Text>
            <S.Form onSubmit={handleFormSubmit}>
              <S.SelectGroup>
                <div className="flavour">
                  <FormSelect label="Flavour">
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
                  </FormSelect>
                </div>
                <div className="qty">
                  <FormSelect label="Quantity">
                    <select value={qty} onChange={handleQtyChange} className="select">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </FormSelect>
                </div>
              </S.SelectGroup>
              <S.CTAList>
                <li className="item">
                  <S.ATCButton onSubmit={handleFormSubmit} type="submit">
                    Add To Cart
                  </S.ATCButton>
                </li>
                <li className="item">
                  <FavoriteToggle product={product} />
                </li>
                <li className="item">
                  <S.Price>${price}</S.Price>
                </li>
              </S.CTAList>
            </S.Form>
          </div>
          <div className="picture">
            {flavour && <ImageSpacer src={`${BASE_URL}${flavour.image.url}`} alt={name} />}
          </div>
        </S.HeroContainer>
      </S.PageWrapper>
    );
  } else {
    return <S.PageWrapper></S.PageWrapper>;
  }
}

export default ProductPage;
