import React from "react";
import { InputContainer } from "../input/input.style";

const Input = ({ size, color, ...rest }) => {
  return <InputContainer size={size} color={color} {...rest} />;
};

export default Input;
