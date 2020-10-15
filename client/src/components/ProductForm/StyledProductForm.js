import styled from "styled-components";
import colors from "../../styles/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlavourSelect = styled.div`
  min-width: 350px;
  margin-bottom: 1.2rem;
  margin-right: 2.4rem;
  flex: 5;

  .label {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    display: inline-block;
    color: ${colors.black};
  }
`;

export const QtySelect = styled.div`
  margin-bottom: 1.2rem;
  margin-right: 2.4rem;
  min-width: 125px;
  flex: 1;

  .label {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 0.8rem;
    display: inline-block;
    color: ${colors.black};
  }
`;

export const SelectBar = styled.div`
  position: relative;
  background-color: ${colors.mediumGrey};
  border-radius: 3px;

  .select {
    position: relative;
    padding: 1.8rem 2rem;
    padding-right: 4.8rem;
    display: inline-block;
    color: ${colors.black};
    background-color: transparent;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
    font-size: inherit;
    z-index: 19;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1.2rem;
    z-index: 9;
  }
`;

export const CTAList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 1.8rem;
  padding-right: 2.4rem;

  .item {
    margin-right: 2.4rem;

    &:last-child {
      flex: 1;
      margin-right: unset;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const Price = styled.span`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1.8rem;
  color: inherit;
  margin-left: auto;
`;
