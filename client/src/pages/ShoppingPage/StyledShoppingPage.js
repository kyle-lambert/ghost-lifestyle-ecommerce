import styled from "styled-components";
import colors from "../../styles/colors";
import { motion } from "framer-motion";

export const ShoppingSection = styled.section`
  min-height: 150vh;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;
`;

export const ShoppingInner = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 200px auto;
    column-gap: 3.8rem;
  }
`;

export const ShoppingFilter = styled(motion.div)`
  margin-bottom: 2.6rem;

  @media (min-width: 768px) {
    grid-column: 1 / 2;
    flex-basis: 225px;
    flex-shrink: 0;
    margin-bottom: unset;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media (min-width: 768px) {
      flex-direction: column;
      flex-wrap: unset;
    }

    .item {
      margin: 0.3rem;

      @media (min-width: 768px) {
        margin: 0.3rem 0;
      }
    }
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: "button",
}))`
  padding: 0.8rem 1.2rem;
  color: inherit;
  text-align: left;
  border-radius: 5px;
  width: 100%;
  font-size: inherit;
  font-weight: 300;
  background-color: transparent;

  &:hover {
    background-color: ${colors.mediumGrey};
  }

  &:disabled {
    cursor: auto;
    font-weight: 400;
    background-color: ${colors.mediumGrey};
  }
`;

export const ShoppingProductsWrapper = styled.div`
  position: relative;
  min-height: 50vh;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

export const ShoppingCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  column-gap: 2.8rem;
  row-gap: 2.8rem;

  @media (min-width: 768px) {
    grid-column: 2 / 3;
  }
`;

export const ShoppingMessage = styled.div`
  margin: 40px 0;
  text-align: center;
`;
