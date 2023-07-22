import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import Button from "src/ReusableComponents/Button";
import Input from "src/ReusableComponents/Input";
import contactImage from "src/assets/Contact/contact.png"

const Contact = () => {
    return (
        <Box
            margin="64px 6rem 121px 6rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="0.938rem"
            b="1px solid #D9D9D9"
        >

            <img src={contactImage} alt="" style={{ width: "40%" }} />


            <Box
                padding="2rem auto 41px auto"
            >
                <Box
                    w="664px"
                    margin="0 auto"
                    padding="1.25rem"

                >
                    <Text
                        fontFamily="Inter"
                        fontSize="2rem"
                        fontWeight="500"
                        textAlign="center"
                        paddingBottom="0.563rem"
                        textColor={theme.colors.grays[900]}
                    >
                        Get in touch
                    </Text>
                    <Text fontSize="0.875rem"
                        fontWeight="400"
                        textAlign="center"
                        paddingBottom="2.813rem"
                        textColor={theme.colors.grays[600]}
                    >
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    </Text>
                    <Box >
                        <Box
                            display="flex"
                            justify-content="space-between"
                            gridGap="1.5rem"
                            marginBottom="1.5rem">
                            <Box
                                flex="1"
                                marginRight="1.5rem">
                                <Text
                                    fontFamily="Inter"
                                    fontSize="0.875rem"
                                    fontWeight="500"
                                    paddingBottom="6px"
                                    textColor={theme.colors.grays[700]}
                                >
                                    First Name
                                </Text>
                                <Input
                                    w="95%"
                                    p="0.625rem 14px"
                                    borderRadius="0.5rem"
                                    border="1px solid #D9D9D9"
                                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    type="text" id="Name" name="Name"
                                >
                                </Input>

                            </Box>
                            <Box flex="1"
                                marginRight="1.5rem">
                                <Text
                                    fontFamily="Inter"
                                    fontSize="0.875rem"
                                    fontWeight="500"
                                    paddingBottom="6px"
                                    textColor={theme.colors.grays[700]}
                                >
                                    Last Name
                                </Text>
                                <Input
                                    w="95%"
                                    p="0.625rem 14px"
                                    borderRadius="0.5rem"
                                    border="1px solid #D9D9D9"
                                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    type="text" id="lastName" name="lastName"
                                >
                                </Input>
                            </Box>
                        </Box>
                        <Box display="flex"
                            justify-content="space-between"
                            gridGap="1.5rem"
                            marginBottom="1.5rem">
                            <Box flex="1"
                                marginRight="1.5rem">
                                <Text
                                    fontFamily="Inter"
                                    fontSize="0.875rem"
                                    fontWeight="500"
                                    paddingBottom="6px"
                                    textColor={theme.colors.grays[700]}
                                >
                                    Mobile Number
                                </Text>

                                <Input
                                    w="95%"
                                    p="0.625rem 14px"
                                    borderRadius="0.5rem"
                                    border="1px solid #D9D9D9"
                                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    type="number" id="mobileNumber" name="mobileNumber"
                                >
                                </Input>
                                {/* <input type="number" id="mobileNumber" name="mobileNumber" /> */}
                            </Box>
                            <Box flex="1"
                                marginRight="1.5rem">
                                <Text
                                    fontFamily="Inter"
                                    fontSize="0.875rem"
                                    fontWeight="500"
                                    paddingBottom="6px"
                                    textColor={theme.colors.grays[700]}
                                >
                                    Email
                                </Text>
                                <Input
                                    w="95%"
                                    p="0.625rem 14px"
                                    borderRadius="0.5rem"
                                    border="1px solid #D9D9D9"
                                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    type="email" id="email" name="email"
                                >
                                </Input>
                                {/* <input type="email" id="email" name="email" /> */}
                            </Box>
                        </Box>
                        <Box marginBottom="2rem">
                            <Text
                                fontFamily="Inter"
                                fontSize="0.875rem"
                                fontWeight="500"
                                paddingBottom="6px"
                                textColor={theme.colors.grays[700]}
                            >
                                Message
                            </Text>
                            <Input
                                w="95%"
                                p="37px 14px"
                                borderRadius="0.5rem"
                                border="1px solid #D9D9D9"
                                boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                type="email" id="message" name="message"
                            >
                            </Input>

                        </Box>
                        <Box textAlign="center">
                            <Button
                                borderColor={theme.colors.primary[500]}
                                borderRadius="0.25rem"
                                fontSize="1rem"
                                fontWeight="500"
                                textColor="white"
                                background={theme.colors.primary[500]}
                                display="inline-flex"
                                padding="0.25rem 35px"
                                justifyContent="center"
                                alignItems="center"
                                gridGap="0.5rem"
                            >Send</Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>

    );
};

export default Contact;