import styled from "styled-components";

export const CheckoutSection = styled.section`
  min-height: 100vh;
`;

export const CheckoutInner = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media (min-width: 1026px) {
    flex-direction: row;
  }
`;

export const ContactDetails = styled.div`
  flex: 1;
  order: 2;

  @media (min-width: 1026px) {
    order: 1;
  }
`;

export const OrderSummary = styled.div`
  flex: 1;
  order: 1;
  margin-bottom: 40px;

  @media (min-width: 1026px) {
    order: 2;
    margin-left: 60px;
  }
`;
