import { ButtonContainer } from "./button.style";

const Button = (props) => {
  const { children, ...extraProps } = props;

  return <ButtonContainer {...extraProps}>{children}</ButtonContainer>;
};

export default Button;
