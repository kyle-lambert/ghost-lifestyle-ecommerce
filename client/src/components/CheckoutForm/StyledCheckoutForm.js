import styled from "styled-components";
import colors from "../../styles/colors";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, auto);
  grid-template-areas:
    "fname lname"
    "email email"
    "address address"
    "postalCode state"
    "city country"
    "submit submit";
  column-gap: 10px;
  row-gap: 10px;

  .fname {
    grid-area: fname;
  }
  .lname {
    grid-area: lname;
  }
  .email {
    grid-area: email;
  }
  .address {
    grid-area: address;
  }
  .postalCode {
    grid-area: postalCode;
  }
  .state {
    grid-area: state;
  }
  .city {
    grid-area: city;
  }
  .country {
    grid-area: country;
  }
  .submit {
    margin-top: 3rem;
    grid-area: submit;
  }
`;

export const PurchaseButton = styled.button`
  position: relative;
  padding: 15px;
  height: 55px;
  width: 100%;
  background-color: ${colors.black};
  font-size: inherit;
  color: ${colors.white};
  font-weight: 400;
  border-radius: 3px;
  display: inline-block;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(40, 40, 40, 0.1);
  transition: transform 100ms ease-out;

  .span {
    position: relative;
    font-size: inherit;
    font-weight: 400;
    color: ${colors.white};
    z-index: 5;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.blue};
    transform: scaleX(0);
    transition: transform 250ms ease-out;
    transform-origin: left;
    z-index: 1;
  }

  &:hover::after {
    transform: scaleX(1);
    transition: transform 250ms ease-out;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 100ms ease-out;
  }
`;
