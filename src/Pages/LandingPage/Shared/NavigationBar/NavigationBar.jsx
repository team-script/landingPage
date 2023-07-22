import Box from "src/ReusableComponents/Box";
import Button from "src/ReusableComponents/Button";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import Logo from "src/assets/Logo/Logo.png"
import { useState } from "react";
import { Link } from "react-router-dom";
const NavigationBar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownItemClick = (item) => {
        console.log("Clicked On:", item);
    };

    return (
        <Box
            h="76px"
            background={theme.colors.primary[500]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="0px 6rem"
        >
            <Text
                fontSize="2rem"
                fontWeight="500"
                textColor="white"
                display="flex"
                alignItems="center"
                padding="19px 0"
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
                        marginLeft="auto"
                        marginRight="auto"
                    >
                        Bharat E-clinic
                    </Text>
                </Box>
            </Text>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Link to="/">
                    <Text
                        fontSize="1.25rem"
                        fontWeight="500"
                        textColor="white"
                        display="flex"
                        alignItems="center"
                        padding="1.5rem 0px 1.5rem 1.5rem"
                    >
                        Home
                    </Text>
                </Link>
                <Link to="/about">
                    <Text
                        fontSize="1.25rem"
                        fontWeight="500"
                        textColor="white"
                        display="flex"
                        alignItems="center"
                        padding="1.5rem 0px 1.5rem 1.5rem"
                    >
                        About
                    </Text>
                </Link>
                <Link to="/blog">
                    <Text
                        fontSize="1.25rem"
                        fontWeight="500"
                        textColor="white"
                        display="flex"
                        alignItems="center"
                        padding="1.5rem 0px 1.5rem 1.5rem"
                    >
                        Blog
                    </Text>
                </Link>
                <Link to="/contact">
                    <Text
                        fontSize="1.25rem"
                        fontWeight="500"
                        textColor="white"
                        display="flex"
                        alignItems="center"
                        padding="1.5rem 1.5rem 1.5rem 1.5rem"
                    >
                        Contact
                    </Text>
                </Link>
                <Button
                    borderRadius="0.25rem"
                    fontSize="1rem"
                    fontWeight="500"
                    textColor="black"
                    position="relative"
                    padding="0.25rem 1.5rem"
                    onClick={handleDropdownToggle}
                >
                    Login
                    {
                        isDropdownOpen &&
                        (
                            <Box
                                position="absolute"
                                background="white"
                                marginTop="15px"
                                display="flex"
                                w="171px"
                                padding="0px 16px"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="4px"
                                boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.12)"
                                transform="translateX(-40%)"
                                transition="opacity 0.2s ease-in-out"
                            >
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('E-clinic Rep')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >
                                        E-clinic Rep
                                    </Text>
                                </Box>
                                <hr style={{
                                    margin: "0",
                                    width: "139px",
                                    background: "#ECECEC"
                                }} />
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('Virtual Doctor')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >
                                        Virtual Doctor
                                    </Text>
                                </Box>
                                <hr style={{
                                    margin: "0",
                                    width: "139px",
                                    background: "#ECECEC"
                                }} />
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('Offline Doctor')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >
                                        Offline Doctor
                                    </Text>
                                </Box>
                                <hr style={{
                                    margin: "0",
                                    width: "139px",
                                    background: "#ECECEC"
                                }} />
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('Laboratory')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >
                                        Laboratory
                                    </Text>

                                </Box>
                                <hr style={{
                                    margin: "0",
                                    width: "139px",
                                    background: "#ECECEC"
                                }} />
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('Sales Rep')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >Sales Rep
                                    </Text>
                                </Box>
                                <hr style={{
                                    margin: "0",
                                    width: "139px",
                                    background: "#ECECEC"
                                }} />
                                <Box cursor="pointer"
                                    padding="8px 10px"
                                    onClick={() => handleDropdownItemClick('Admin')}>
                                    <Text
                                        fontSize="14px"
                                        fontWeight="500"
                                    >
                                        Admin
                                    </Text>
                                </Box>
                            </Box>
                        )}

                </Button>
            </Box>
        </Box>
    );
};

export default NavigationBar;