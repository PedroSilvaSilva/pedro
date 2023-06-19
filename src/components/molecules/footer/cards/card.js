import React from "react";
import { Description, Title, CardContainer } from "./card.style";

const Card = ({ width, height, title, description }) => {
  return (
    <CardContainer width={width} height={height}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default Card;
