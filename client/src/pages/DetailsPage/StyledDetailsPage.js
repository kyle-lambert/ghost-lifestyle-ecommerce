import styled from "styled-components";
import colors from "../../styles/colors";

export const PageWrapper = styled.div`
  position: relative;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.red};
    clip-path: polygon(100% 0, 55% 0, 100% 85%);
    z-index: -1;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;

  .content {
    flex: 5;
  }

  .picture {
    flex: 4;
  }
`;

export const Heading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  color: ${colors.black};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 6.8rem;
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  max-width: 80%;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SelectGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.2rem;

  .flavour {
    min-width: 350px;
    margin-bottom: 1.2rem;
    margin-right: 2.4rem;
    flex: 5;
  }

  .qty {
    margin-bottom: 1.2rem;
    margin-right: 2.4rem;
    min-width: 125px;
    flex: 1;
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

export const ATCButton = styled.button`
  padding: 1.8rem 1.8rem;
  width: 175px;
  background-color: ${colors.black};
  font-size: inherit;
  color: ${colors.white};
  font-weight: 400;
  border-radius: 3px;
`;

export const Price = styled.span`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 1.8rem;
  color: inherit;
  margin-left: auto;
`;
