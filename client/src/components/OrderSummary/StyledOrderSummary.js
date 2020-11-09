import styled from "styled-components";
import colors from "../../styles/colors";

export const Wrapper = styled.div`
  margin-top: 20px;
  border: 1px solid ${colors.mediumGrey};
  border-radius: 3px;
  overflow: hidden;
`;

export const ItemCount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;
  background-color: ${colors.mediumGrey};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  .span {
    color: ${colors.black};
    font-weight: 400;
    font-size: inherit;
  }

  .count {
    font-weight: 300;
  }
`;

export const OrderSummaryList = styled.ul`
  position: relative;
  min-height: 250px;
  max-height: 550px;
  overflow-y: scroll;

  @media (minw-width: 1026px) {
    min-height: 350px;
  }
`;

export const PricesList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${colors.mediumGrey};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 15px 25px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;

    &:last-child {
      margin-top: 40px;
    }
  }
`;

export const Label = styled.span`
  color: ${colors.black};
  font-weight: 500;
  font-size: inherit;
`;

export const Amount = styled.span`
  color: ${colors.black};
  font-weight: 400;
  font-size: inherit;
`;
