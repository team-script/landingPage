import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import About from "src/assets/About/AboutUS.png"
const AboutUs = () => {
    return (
        <Box
            marginTop="2rem"
            marginBottom="2rem"
        >
            <Text
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
                paddingBottom="0.938rem"
            >
                About Us
            </Text>
            <Text
                fontSize="1rem"
                fontWeight="400"
                textAlign="center"
                paddingBottom="2rem"
                w="60%"
                marginLeft="auto"
                marginRight="auto"
                textColor={theme.colors.grays[800]}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit  ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numq lor sit amet, consectetur, adipisci velit, sed qui adipisci velit, sed
            </Text>
            <Box
                display="flex"
                justifyContent="center"
            >
                <img src={About} alt="AboutUS" style={{
                    width: "71%",
                    height: "499px",

                }} />
            </Box>
        </Box>
    );
};

export default AboutUs;