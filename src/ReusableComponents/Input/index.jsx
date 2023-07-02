import React from "react";
import { InputStyled } from "./styles";
import theme from "src/theme";

const Input = ({ children, isIcon, error, isSemiBold, ...props }) => {
  return (
    <InputStyled
      type="text"
      fw={isSemiBold && "700"}
      {...props}
      border={`1px solid ${
        error ? theme.colors.negative[500] : theme.colors.grays[200]
      }`}
    />
  );
};

export default Input;
