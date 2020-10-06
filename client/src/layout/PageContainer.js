import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5.8rem;
  padding-bottom: 5.8rem;
`;

function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

export default PageContainer;
