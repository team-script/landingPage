import React from "react";
import { TextStyled } from "./styles";

const Text = ({ children, ...props }) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};

export default Text;
