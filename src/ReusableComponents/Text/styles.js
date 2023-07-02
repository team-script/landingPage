import theme from "src/theme";
import styled from "styled-components";

export const TextStyled = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  word-break: ${({ wordBreak }) => wordBreak};
  opacity: ${({ opacity }) => opacity};
  text-decoration: ${({ textDecoration }) => textDecoration};
  position: ${({ position }) => position};
  cursor: ${({ cursor }) => cursor};
  padding-top: ${({ paddingTop }) => paddingTop};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
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
