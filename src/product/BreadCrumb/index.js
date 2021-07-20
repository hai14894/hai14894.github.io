import React from "react";

import { Container, Title } from "./styled";

const BreadCrumb = ({ title }) => {
  return (
    <Container>
      <p>
        HOME / PLATES / <Title>{title}</Title>
      </p>
    </Container>
  );
};

export default BreadCrumb;
