import Text from "src/ReusableComponents/Text";
import Box from "src/ReusableComponents/Box";
import theme from "src/theme";
import { Link } from "react-router-dom";
import Linkedin from "src/assets/Footer/Linkedin.svg"
import Instagram from "src/assets/Footer/Instagram.svg"
import Youtube from "src/assets/Footer/Youtube.svg"
import Facebook from "src/assets/Footer/Facebook.svg"
import Logo from "src/assets/Logo/Logo.png"
const Footer = () => {
    return (
        <Box
            background={theme.colors.primary[500]}
            padding="4rem 6rem 0 6rem"
            marginTop="7.563rem"
        >
            <Box
                display="grid"
                gridTemplateColumns="auto auto"
                gridGap="27rem"
            >

                <Box
                    display="grid"
                    gridTemplateColumns="auto auto"
                    gridGap="7.375rem"
                >
                    {/* Logo  */}
                    <Box w="46px">
                        <Box w="32px" h="32px"
                            marginLeft="auto"
                            marginRight="auto"
                        >
                            <img src={Logo} alt="Logo" />
                        </Box>

                        <Text
                            fontSize="0.75rem"
                            fontWeight="400"
                            textColor="white"
                            textAlign="center"
                            w="45px"
                            marginBottom="3rem"
                            marginLeft="auto"
                            marginRight="auto"
                        >
                            Bharat E-clinic
                        </Text>
                    </Box>
                    <Box>
                        <Text
                            fontSize="1.5rem"
                            fontWeight="400"
                            textColor="white"
                            textAlign="justify"
                            w="307px"
                            marginBottom="3rem"
                        >
                            123 Market St. #22B
                            Charlottesville, California 44635
                        </Text>
                        <Box marginBottom="1.06rem">
                            <Text
                                fontSize="0.875rem"
                                fontWeight="400"
                                textColor="white"
                            >+91735734534
                            </Text>
                            <hr style={{
                                margin: "0",
                                width: "6rem"
                            }} />
                        </Box>
                        <Box marginBottom="1.43rem">
                            <Text
                                fontSize="0.875rem"
                                fontWeight="400"
                                textColor="white"
                            >contact@bharateclinic.com
                            </Text>
                            <hr style={{
                                margin: "0",
                                width: "12.313rem"
                            }} />
                        </Box>
                        <Box
                            display="flex"
                            gridGap="2rem"
                        >
                            <Link to="https://www.facebook.com">
                                <img src={Facebook} alt="" />
                            </Link>
                            <Link to="https://www.twitter.com">
                                <img src={Youtube} alt="" />
                            </Link>
                            <Link to="https://www.instagram.com">
                                <img src={Instagram} alt="" />
                            </Link>
                            <Link to="https://www.linkedin.com">
                                <img src={Linkedin} alt="" />
                            </Link>
                        </Box>
                    </Box>

                </Box>

                <Box

                    display="grid"
                    gridTemplateColumns="auto auto"
                    gridGap="4.8rem">
                    <Box>
                        <Link to="/">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Home
                            </Text>
                        </Link>
                        <Link to="/about">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                About
                            </Text>
                        </Link>
                        <Link to="/blog">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Blog
                            </Text>
                        </Link>
                        <Link to="/contact">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Contact
                            </Text>
                        </Link>
                        <Link to="/login">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Login
                            </Text>
                        </Link>
                    </Box>
                    <Box>
                        <Link to="/patientLogin">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Patient Login
                            </Text>
                        </Link>

                        <Link to="/doctorLogin">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                Doctor Login
                            </Text>
                        </Link>
                        <Link to="/patientLogin">
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                textAlign="justify"
                                marginBottom="1rem"
                            >
                                E-clinic Login
                            </Text>
                        </Link>

                    </Box>
                </Box>
            </Box>

            <Text
                fontSize="0.75rem"
                fontWeight="600"
                textColor="white"
                textAlign="center"
                marginTop="3rem"
                paddingBottom="2rem"
            >
                © 2023 Designed & Developed by
            </Text>
        </Box>
    );
};

export default Footer;
