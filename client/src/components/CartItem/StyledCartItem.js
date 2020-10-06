import styled from "styled-components";
import colors from "../../styles/colors";

export const ImageWrapper = styled.div`
  flex: 3;
`;

export const ContentWrapper = styled.div`
  flex: 8;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .button {
    display: block;
    padding: 0.5rem 0;
    font-size: 1.4rem;
    color: ${colors.black};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
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
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: 400;
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
  line-height: 1.4;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0.5rem 0;
`;
