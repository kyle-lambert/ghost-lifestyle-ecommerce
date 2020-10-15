import styled from "styled-components";
import colors from "../../styles/colors";

export const CategorySection = styled.section`
  min-height: 90vh;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
  width: 100%;
`;

export const CategoryInner = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  column-gap: 2.8rem;
`;

export const CategoryFilter = styled.div`
  grid-column: 1 / 2;
  flex-basis: 225px;
  flex-shrink: 0;

  .list {
    display: flex;
    flex-direction: column;

    .item {
      margin-bottom: 0.3rem;
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
  font-weight: ${(props) => (props.selected === true ? 400 : "inherit")};
  background-color: ${(props) =>
    props.selected === true ? colors.mediumGrey : "transparent"};

  &:hover {
    background-color: ${colors.mediumGrey};
  }

  &:disabled {
    cursor: auto;
  }
`;

export const CategoryCards = styled.ul`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  column-gap: 2.4rem;
  row-gap: 2.4rem;
`;
