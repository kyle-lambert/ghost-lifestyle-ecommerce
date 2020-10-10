import React, { useEffect, useReducer } from "react";
import axios from "axios";
import * as S from "./StyledDetailsPage.js";

import ImageSpacer from "../../components/ImageSpacer";
import BrandLogo from "../../components/BrandLogo";
import FormSelect from "../../components/FormSelect";
import FavoriteToggle from "../../components/FavoriteToggle";

const BASE_URL = "http://localhost:1337";
const types = {
  GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_FAILURE: "GET_PRODUCT_FAILURE",
  GET_PRODUCT_LOADING: "GET_PRODUCT_LOADING",
  SET_FORM_FLAVOUR: "SET_FORM_FLAVOUR",
  SET_FORM_QTY: "SET_FORM_QTY",
  SET_IMAGE_FLAVOUR_INDEX: "SET_IMAGE_FLAVOUR_INDEX",
};

const initState = {
  product: null,
  loading: false,
  error: null,
  formFlavour: "",
  formQty: 1,
  imageFlavourIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.GET_PRODUCT_loading:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SET_FORM_FLAVOUR:
      return {
        ...state,
        formFlavour: action.payload,
      };
    case types.SET_FORM_QTY:
      return {
        ...state,
        formQty: action.payload,
      };
    case types.SET_IMAGE_FLAVOUR_INDEX:
      return {
        ...state,
        imageFlavourIndex: action.payload,
      };
    default:
      return state;
  }
};

function DetailsPage({ history, location, match }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const slug = match.params.slug || null;

  useEffect(() => {
    if (slug) {
      dispatch({ type: types.GET_PRODUCT_LOADING, payload: true });
      axios
        .get("/supplements", {
          baseURL: BASE_URL,
          params: {
            slug: slug,
          },
        })
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length === 1) {
            dispatch({
              type: types.GET_PRODUCT_SUCCESS,
              payload: data.data[0],
            });
          }
          dispatch({ type: types.GET_PRODUCT_LOADING, payload: false });
        })
        .catch((error) => {
          dispatch({ type: types.GET_PRODUCT_FAILURE, payload: error });
          dispatch({ type: types.GET_PRODUCT_LOADING, payload: false });
        });
    }
  }, [slug]);

  useEffect(() => {
    if (state.product) {
      dispatch({
        type: types.SET_FORM_FLAVOUR,
        payload: state.product.flavours[0].name.trim(),
      });
    }
  }, [state.product]);

  useEffect(() => {
    if (state.product) {
      const { flavours } = state.product;
      const currentFlavourIndex = flavours.findIndex(
        (flavour) => flavour.name.trim() === state.formFlavour.trim()
      );
      if (currentFlavourIndex !== -1) {
        dispatch({
          type: types.SET_IMAGE_FLAVOUR_INDEX,
          payload: currentFlavourIndex,
        });
      }
    }
  }, [state.formFlavour]);

  const handleQtyChange = (e) => {
    const qty = Number.parseInt(e.target.value);
    dispatch({ type: types.SET_FORM_QTY, payload: qty });
  };

  const handleFlavourChange = (e) => {
    const flavour = e.target.value.trim();
    dispatch({ type: types.SET_FORM_FLAVOUR, payload: flavour });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  if (state.product) {
    const { flavours, details, name, description, price } = state.product;
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
                  <FormSelect>
                    <select
                      value={state.formFlavour}
                      onChange={handleFlavourChange}
                      className="select">
                      {flavours.map((flavour) => (
                        <option key={flavour.id} value={flavour.name}>
                          {flavour.name}
                        </option>
                      ))}
                    </select>
                  </FormSelect>
                </div>
                <div className="qty">
                  <FormSelect>
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
                  <FavoriteToggle />
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
