import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: 100%;

  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
  }
`;
