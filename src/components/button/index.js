import { ButtonContainer } from "./style";

export const Button = ({ type, children, ...restProps }) => {
  return (
    <ButtonContainer type={type} {...restProps}>
      {children}
    </ButtonContainer>
  );
};
