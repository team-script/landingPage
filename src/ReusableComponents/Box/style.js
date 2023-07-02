import styled from "styled-components";
export const BoxStyled = styled.div`
  display: ${({ display }) => display};
  transform: ${({ transform }) => transform};
  cursor: ${({ cursor }) => cursor};
  padding: ${({ padding }) => padding};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  padding-top: ${({ paddingTop }) => paddingTop};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-top: ${({ marginTop }) => marginTop};
  margin: ${({ margin }) => margin};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-right: ${({ marginRight }) => marginRight};
  background-color: ${({ bgc }) => bgc};
  background-size: ${({ backgroundSize }) => backgroundSize};
  background: ${({ background }) => background};
  background-image: ${({ bgi }) => bgi};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-top-right-radius: ${({ borderRadiusTopRight }) =>
    borderRadiusTopRight};
  border-bottom-right-radius: ${({ borderRadiusBottomRight }) =>
    borderRadiusBottomRight};
  cursor: ${({ pointer }) => pointer && "pointer"};
  border: ${({ b }) => b};
  border-bottom: ${({ bb }) => bb};
  border-top: ${({ bt }) => bt};
  border-right: ${({ br }) => br};
  border-left: ${({ bl }) => bl};
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  max-width: ${({ maxW }) => maxW};
  min-width: ${({ minW }) => minW};
  max-height: ${({ maxH }) => maxH};
  min-height: ${({ minH }) => minH};
  user-select: ${({ userSelect }) => userSelect};
  flex: ${({ flex }) => flex};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  transform: ${({ transform }) => transform};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  box-shadow: ${({ boxShadow }) => boxShadow};
  z-index: ${({ zIndex }) => zIndex};
  opacity: ${({ opacity }) => opacity};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};

  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  column-gap: ${({ columnGap }) => columnGap};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};

  &:hover {
    background-color: ${(props) => props.hoverBackground};
  }
`;
