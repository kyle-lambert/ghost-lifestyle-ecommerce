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
  column-gap: 15px;
  row-gap: 10px;
  margin: 30px 0;

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
`;
