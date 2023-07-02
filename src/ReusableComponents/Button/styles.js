import styled from "styled-components";
import theme from "../../theme";

export const ButtonStyled = styled.button`
  border-radius: ${({ borderRadius }) => borderRadius};
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  padding: ${({ padding }) => padding};
  outline: ${({ outline }) => outline};
  margin: ${({ m }) => m};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ background = "white" }) => background};
  font-size: ${({ fontSize }) => fontSize};
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  padding: ${({ p }) => p};
  color: ${({ textColor }) => textColor};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  border: ${({ border }) => border};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  cursor: ${({ cursor }) => cursor};
  &:hover,
  :focus {
    outline: none;
  }
  ${({ background }) =>
    background &&
    `&:hover {
    background: ${
      theme.colors.primary[
        background === theme.colors.primary[500] ? 700 : background
      ]
    };
    border: ${!theme.colors.primary[500] && "none"};
  }
  `}
`;
