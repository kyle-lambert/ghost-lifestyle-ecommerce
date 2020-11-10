import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 599;
`;

export const Backdrop = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 70%;
  z-index: 699;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  padding: 5%;
  padding-bottom: calc(5% + 55px);
  box-shadow: 0 2px 15px rgba(40, 40, 40, 0.15);
  z-index: 799;
  min-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3.6rem;
    padding-bottom: calc(3.6rem + 55px);
    min-width: 500px;
  }

  .logo {
    margin-bottom: 1.2rem;
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const TermsBar = styled.div`
  position: absolute;
  bottom: 0;
  left: -1px;
  right: -1px;
  background-color: ${colors.black};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .span {
    color: ${colors.white};
    padding: 0 1rem;
    font-size: 1.2rem;
    opacity: 0.5;
    text-align: center;
  }
`;
