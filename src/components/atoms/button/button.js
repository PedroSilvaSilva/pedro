import React from "react";
import { ButtonContainer } from "../button/button.style";

const Button = ({ children, size, color, ...rest }) => {
  return (
    <ButtonContainer size={size} color={color} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
