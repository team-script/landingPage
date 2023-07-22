import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";


const MissionVission = () => {
    return (
        <Box
            background={theme.colors.primary[500]}
            padding="2rem 6rem 2rem 6rem"
        >

            <Box display="flex"
                justifyContent="center"
                alignItems="center"
                gridGap="74px"
            >
                <Box
                    width="480px"
                    height="500px"
                    flex-shrink="0"
                    border-radius="0.5rem"
                    background="#C3EFD0"

                >
                    <Text
                        fontSize="1.5rem"
                        fontWeight="500"
                        textAlign="center"
                        paddingTop="70px"
                        paddingBottom="1.563rem"
                        textColor={theme.colors.grays[800]}
                    >
                        Mission
                    </Text>
                    <Text
                        fontSize="1rem"
                        fontWeight="400"
                        textAlign="center"
                        w="361px"
                        h="317px"
                        margin="auto"
                        padding="0 60px 0 60px"
                        textColor={theme.colors.grays[800]}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Sed ut perspiciatis unde omnis iste natus
                    </Text>
                </Box>

                <Box
                    width="480px"
                    height="500px"
                    flex-shrink="0"
                    border-radius="0.5rem"
                    background="#C3EFD0"

                >
                    <Text
                        fontSize="1.5rem"
                        fontWeight="500"
                        textAlign="center"
                        paddingTop="70px"
                        paddingBottom="1.563rem"
                        textColor={theme.colors.grays[800]}
                    >
                        Vision
                    </Text>
                    <Text
                        fontSize="1rem"
                        fontWeight="400"
                        textAlign="center"
                        w="361px"
                        h="317px"
                        margin="auto"
                        padding="0 60px 0 60px"
                        textColor={theme.colors.grays[800]}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Sed ut perspiciatis unde omnis iste natus
                    </Text>
                </Box>
            </Box >
        </Box>
    );
};

export default MissionVission;