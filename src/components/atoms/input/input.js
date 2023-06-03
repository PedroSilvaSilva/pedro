import React, { useState } from "react";
import { InputWrapper, InputStyled } from "./input.style";

const Input = (props) => {
  const [type, setType] = useState(props.type ?? "text");

  if (props.type === "password") {
    return (
      <InputWrapper>
        <InputStyled {...props} type={type} />
        <button
          type="button"
          onClick={() =>
            setType((currentValue) =>
              currentValue === "password" ? "text" : "password"
            )
          }
        >
          yo
        </button>
      </InputWrapper>
    );
  }

  return (
    <InputWrapper>
      <InputStyled {...props} type={type} />
    </InputWrapper>
  );
};

export default Input;
