import React from "react";
import Box from "../Box";
import theme from "src/theme";
import Text from "../Text";

const RadioButton = ({ name, isActive, handleClick, margin, index }) => {
  return (
    <Box
      background={
        isActive ? theme.colors.primary[500] : theme.colors.white[900]
      }
      padding="8px"
      w="fit-content"
      b="1px solid #D9D9D9"
      borderRadius="0.25rem"
      cursor="pointer"
      onClick={handleClick}
      marginLeft={index === 0 ? 0 : `${margin}`}
    >
      <Text
        textColor={
          isActive ? theme.colors.white[900] : theme.colors.primary[500]
        }
        fontSize="12px"
        fontWeight="400"
      >
        {name}
      </Text>
    </Box>
  );
};

export default RadioButton;
