import Box from "src/ReusableComponents/Box";
import Circle from "src/assets/Home/Circle-1.png";
import Doctor from "src/assets/Home/HeroDoctor.png";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import Button from "src/ReusableComponents/Button";

const Hero = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="2rem"
           
        >
            <Box
                position="relative"
            >
                <Text
                    fontSize="3rem"
                    fontWeight="500"
                    textColor={theme.colors.grays[900]}
                    display="flex"
                    alignItems="center"
                    padding="3.2rem 0 1rem 6rem"
                >
                    Simplifying <br /> Healthcare for You
                </Text>
                <img
                    src={Circle}
                    alt="circle"
                    
                    style={{
                        marginLeft: "4.25rem", marginTop: "2rem", position: "absolute",
                        top: "0px"
                    }}
                />
                <Text
                    fontSize="1rem"
                    fontWeight="400"
                    textColor={theme.colors.grays[700]}
                    padding="0 0 1.5rem 6rem"
                    w="72%"
                >
                    Experience Easy Healthcare with Bharat E-Clinic. Connect with top doctors, schedule appointments, and access personalized medical advice from our local e-clinic centers. Simplify your healthcare journey and take control of your well-being with our seamless online platform.
                </Text>
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
                    marginLeft="6rem"
                >
                    Register Now
                </Button>
            </Box>
            <Box>
                <Box
                    background="#E7F9EC"
                    width="65%"
                    height="518px"
                    borderRadiusTopLeft="50%"
                    borderRadiusBottomLeft="50%"
                    borderRadiusBottomRight="20%"
                  
                >
                    <img
                        src={Doctor}
                        alt="doctor"
                      //  height={"518px"}
                        style={{
                            borderBottomLeftRadius: "50%",
                            borderBottomRightRadius: "20%"
                        }}

                    />
                </Box>

            </Box>
        </Box>
    );
};

export default Hero;