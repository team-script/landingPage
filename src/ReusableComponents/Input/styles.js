import styled from "styled-components";
import theme from "../../theme";

export const InputStyled = styled.input`
  border-radius: ${({ borderRadius }) => borderRadius};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  background-color: ${({ background = "white" }) => background};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding: ${({ p }) => p};
  color: ${({ textColor }) => textColor};
  font-weight: ${({ fw }) => fw};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  max-width: ${({ mw }) => mw};
  border: ${({ border }) => border};
  box-shadow: ${({ boxShadow }) => boxShadow};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  cursor: ${({ cursor }) => cursor};
  line-height: ${({ lineHeight }) => lineHeight};
  &:hover {
    border: 1px solid ${theme.colors.grays[400]};
  }
  &:focus {
    border: 1px solid ${theme.colors.primary[500]};
  }
`;

export const TextAreaStyled = styled.textarea`
  border-radius: ${({ borderRadius }) => borderRadius};
  border-left: ${({ borderLeft }) => borderLeft};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius};
  margin-top: ${({ marginTop }) => marginTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  background-color: ${({ background = "white" }) => background};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  padding: ${({ p }) => p};
  color: ${({ textColor }) => textColor};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  max-width: ${({ mw }) => mw};
  border: ${({ border }) => border};
  backdrop-filter: ${({ backdropFilter }) => backdropFilter};
  cursor: ${({ cursor }) => cursor};
  line-height: ${({ lineHeight }) => lineHeight};
  &:hover {
    border: 1px solid ${theme.colors.grays[400]};
  }
  &:focus {
    border: 1px solid ${theme.colors.primary[500]};
  }
`;
