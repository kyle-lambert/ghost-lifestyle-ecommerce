import React, { useEffect } from "react";
import axios from "axios";
import * as S from "./StyledDetailsPage.js";

import ImageSpacer from "../../components/ImageSpacer";
import BrandLogo from "../../components/BrandLogo";
import FormSelect from "../../components/FormSelect";
import FavoriteToggle from "../../components/FavoriteToggle";

import { useProductDetails } from '../../contexts/ProductDetailsContext';

const BASE_URL = 'http://localhost:1337';

function DetailsPage({ match }) {
  const [state, dispatch] = useProductDetails()
  const slug = match.params.slug || null;

  useEffect(() => {
    const fetchProduct = () => {
      dispatch({ type: useProductDetails.types.GET_PRODUCT_LOADING, payload: true });
      axios
        .get("/supplements", {
          baseURL: 'http://localhost:1337',
          params: {
            slug: slug,
          },
        })
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length === 1) {
            dispatch({
              type: useProductDetails.types.GET_PRODUCT_SUCCESS,
              payload: data.data[0],
            });
          }
          dispatch({ type: useProductDetails.types.GET_PRODUCT_LOADING, payload: false });
        })
        .catch((error) => {
          dispatch({ type: useProductDetails.types.GET_PRODUCT_FAILURE, payload: error });
          dispatch({ type: useProductDetails.types.GET_PRODUCT_LOADING, payload: false });
        });
    }

    if (slug) {
      fetchProduct()
    }

    return () => {
      dispatch({type: useProductDetails.types.RESET_STATE});
    }
  }, [slug, dispatch]);

  useEffect(() => {
    if (state.product) {
      dispatch({
        type: useProductDetails.types.SET_FORM_FLAVOUR,
        payload: state.product.flavours[0].name.trim(),
      });
    }
  }, [state.product, dispatch]);

  useEffect(() => {
    if (state.product) {
      const { flavours } = state.product;
      const currentFlavourIndex = flavours.findIndex(
        (flavour) => flavour.name.trim() === state.formFlavour.trim()
      );
      if (currentFlavourIndex !== -1) {
        dispatch({
          type: useProductDetails.types.SET_IMAGE_FLAVOUR_INDEX,
          payload: currentFlavourIndex,
        });
      }
    }
  }, [state.product, state.formFlavour, dispatch]);

  const handleQtyChange = (e) => {
    const qty = Number.parseInt(e.target.value);
    dispatch({ type: useProductDetails.types.SET_FORM_QTY, payload: qty });
  };

  const handleFlavourChange = (e) => {
    const flavour = e.target.value.trim();
    console.log(flavour);
    dispatch({ type: useProductDetails.types.SET_FORM_FLAVOUR, payload: flavour });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  if (state.product) {
    const { flavours, name, description, price } = state.product;
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
                  <FormSelect label='Flavour'>
                    <select
                      value={state.formFlavour}
                      onChange={handleFlavourChange}
                      className="select">
                      {flavours.map((flavour) => (
                        <option key={flavour.id} value={flavour.name.trim()}>
                          {flavour.name}
                        </option>
                      ))}
                    </select>
                  </FormSelect>
                </div>
                <div className="qty">
                  <FormSelect label="Quantity">
                    <select
                      value={state.formQty}
                      onChange={handleQtyChange}
                      className="select">
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
                  <S.ATCButton type="submit">Add To Cart</S.ATCButton>
                </li>
                <li className="item">
                  <FavoriteToggle product={state.product} />
                </li>
                <li className="item">
                  <S.Price>${price}</S.Price>
                </li>
              </S.CTAList>
            </S.Form>
          </div>
          <div className="picture">
            <ImageSpacer
              src={`${BASE_URL}${flavours[state.imageFlavourIndex].image.url}`}
              alt={name}
            />
          </div>
        </S.HeroContainer>
      </S.PageWrapper>
    );
  } else {
    return <S.PageWrapper></S.PageWrapper>;
  }
}

export default DetailsPage;
