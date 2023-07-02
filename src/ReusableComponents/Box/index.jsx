import { BoxStyled } from "./style";
import React from "react";

const Box = ({ children, ...props }) => {
  return (
    <BoxStyled {...props} data-testid="box">
      {children}
    </BoxStyled>
  );
};

export default Box;
