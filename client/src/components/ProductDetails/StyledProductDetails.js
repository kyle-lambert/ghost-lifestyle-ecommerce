import styled from "styled-components";
import colors from "../../styles/colors";

export const DetailsContainer = styled.div`
  box-shadow: 0 10px 25px rgba(40, 40, 40, 0.2);
  border-radius: 3px;
  overflow: hidden;
`;

export const TabList = styled.ul`
  display: flex;
  align-items: center;

  .item {
    flex: 1;
  }
`;

export const TabButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 70px;
  padding: 1.6rem;
  font-size: inherit;
  font-weight: 300;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  transition: background-color 250ms ease;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  &:disabled {
    background-color: ${colors.mediumGrey};
    cursor: auto;
    color: ${colors.black};
    font-weight: 500;
  }
`;

export const ContentBox = styled.div`
  min-height: 80vh;
  background-color: ${colors.mediumGrey};
  padding: 10%;
  @media (min-width: 768px) {
    padding: 5%;
  }
`;

export const ContentList = styled.ul`
  .item {
    margin-bottom: 2.8rem;

    &:last-child {
      margin-bottom: unset;
    }
  }
`;

export const Label = styled.span`
  display: block;
  color: ${colors.black};
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;
