import styled from "styled-components";
import { motion } from "framer-motion";

export const CheckoutSection = styled.section`
  /* display: flex;
  flex-direction: column;

  

  @media (min-width: 1026px) {
    flex-direction: row;
  } */

  display: grid;
  row-gap: 2rem;
  column-gap: 2rem;

  @media (min-width: 375px) {
    column-gap: 3rem;
    row-gap: 3rem;
  }

  @media (min-width: 1026px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactDetails = styled(motion.div)`
  flex: 1;
  order: 2;

  @media (min-width: 1026px) {
    order: 1;
  }
`;

export const OrderSummary = styled.div`
  flex: 1;
  order: 1;
  /* margin-bottom: 40px; */

  @media (min-width: 1026px) {
    order: 2;
    /* margin-left: 60px; */
  }
`;
