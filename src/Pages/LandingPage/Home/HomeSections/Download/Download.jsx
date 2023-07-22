import phone from "src/assets/Home/iPhone.png";
import Text from "src/ReusableComponents/Text";
import Box from "src/ReusableComponents/Box";
import Button from "src/ReusableComponents/Button";
import theme from "src/theme";
const Download = () => {
    return (
        <Box
            margin="3rem 0 15rem 6rem"
            height="847px">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center" >
                <Box >
                    <Text
                        textColor="#004A53"
                        fontSize="2rem"
                        fontWeight="500"
                    >Download our app</Text>
                    <Text
                        textColor="#004A53"
                        fontSize="1rem"
                        fontWeight="400"
                        marginTop="0.938rem"
                        marginBottom="35px"
                        w="406px"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag Ut enim ad minim veniam, quis nostrud</Text>
                    <Button
                        borderColor={theme.colors.primary[500]}
                        borderRadius="0.25rem"
                        fontSize="1rem"
                        fontWeight="500"
                        textColor="white"
                        background={theme.colors.primary[500]}
                        display="flex"
                        alignItems="center"
                        padding="0.4rem 1rem"
                    >Download App</Button>
                </Box>
                <Box position="relative"
                >
                    <Box
                        background="#E7F9EC"
                        w="700px"
                        h="600px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadiusTopLeft="80%"
                        borderRadiusTopRight="50%"
                        borderRadiusBottomLeft="20%"
                        borderRadiusBottomRight="50%"
                    >
                    </Box>
                    <img src={phone} alt="" style={{
                        height: "847px",
                        position: "absolute",
                        top: "-10%", left: "-35%"
                    }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Download;