import styled from "styled-components";
import colors from "../../styles/colors";

export const DetailsContainer = styled.div`
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
  padding: 1.6rem 2.8rem;
  font-size: inherit;
  font-weight: 300;
  background-color: ${colors.darkGrey};
  color: white;
  transition: background-color 250ms ease;

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
  padding: 5%;
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
