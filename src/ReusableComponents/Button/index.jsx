import React from "react";
import { ButtonStyled } from "./styles";

const Button = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props} id={props?.id}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
