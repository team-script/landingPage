import React from "react";
import Box from "src/ReusableComponents/Box";
import theme from "src/theme";
import Logout from "src/assets/Logout.svg";
import Text from "src/ReusableComponents/Text";

const Header = () => {
  return (
    <Box
      //h="76px"
      background={theme.colors.primary[500]}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="1.19rem 1.12rem"
    >
      <Text
        fontSize="2rem"
        fontWeight="500"
        textColor="white"
        display="flex"
        alignItems="center"
      >
        LOGO
      </Text>
      <Box
        background={theme.colors.white[900]}
        h="40px"
        w="138px"
        display="flex"
        padding="6px 15px 6px 15px"
        b="1px solid #D9D9D9"
        borderRadius="4px"
        alignItems="center"
        cursor="pointer"
        justifyContent="space-evenly"
      >
        <img src={Logout} alt="logo" height={"14px"} />
        <Text marginLeft="12px">Logout</Text>
      </Box>
    </Box>
  );
};

export default Header;
