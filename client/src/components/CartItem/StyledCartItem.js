import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.li`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.mediumGrey};
  padding: 1rem;
  display: flex;
`;

export const ImageWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: initial;
    flex-basis: 115px;
    margin: auto;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;

  .button {
    margin-top: auto;
    display: block;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${colors.black};
    background-color: transparent;

    &:hover {
      font-weight: 500;
    }
  }
`;

export const InfoWrapper = styled.div`
  flex-basis: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 0;
`;

export const Name = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  color: ${colors.black};
  line-height: 1.6;
`;

export const Text = styled.span`
  display: block;
  color: ${colors.black};
  line-height: 1.5;
  font-size: 1.4rem;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  display: block;
  color: ${colors.black};
  line-height: 1.6;
`;

export const Qty = styled.span`
  display: block;
  color: ${colors.black};
  line-height: 1.5;
  font-size: 1.4rem;
`;
