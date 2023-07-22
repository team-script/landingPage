import theme from "src/theme";
import styled from "styled-components";

export const TextStyled = styled.p`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  word-break: ${({ wordBreak }) => wordBreak};
  background: ${({ background }) => background};
  opacity: ${({ opacity }) => opacity};
  text-decoration: ${({ textDecoration }) => textDecoration};
  position: ${({ position }) => position};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  color: ${({ textColor = "black" }) => textColor};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  transform: ${({ transform }) => transform};
  

  ${({ gradients }) =>
    gradients &&
    ` {
      background: ${theme.colors.gradients.rainbow};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
  `}

  ${({ hover }) =>
    hover &&
    `
    &:hover {
        color: ${theme.colors.grays[200]};
        font-size: ${"70px"};

      }
  `}

  ${({ isMedia }) =>
    isMedia &&
    `
  @media (max-width: 768px) {
    font-size: ${isMedia};
  }
  `}
`;
