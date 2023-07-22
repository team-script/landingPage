import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
const AboutApproach = () => {
    const data = [
        {
            id: 1,
            image: "src/assets/About/Tuning.png",
            title: "Activate",
            description: "Take the first step towards virtual healthcare by activating your account. Provide the necessary information and set up your profile to begin accessing our online consultation services.",
        },
        {
            id: 2,
            image: "src/assets/About/Headphones.png",
            title: "Consult",
            description: "Seamlessly connect with licensed healthcare professionals from various specialties. Use our platform to securely communicate, share medical records, and discuss your healthcare needs with experts.",
        },
        {
            id: 3,
            image: "src/assets/About/User.png",
            title: "Connect",
            description: "Schedule appointments and have virtual consultations with experienced doctors. Discuss your symptoms, receive medical advice, and get prescriptions conveniently from the nearest eclinic.",
        },
    ];

    return (
        <Box>
            <Box margin="2rem auto 64px auto">
                <Text
                    fontSize="2rem"
                    fontWeight="500"
                    textAlign="center"
                    paddingBottom="3rem"
                    textColor={theme.colors.grays[900]}
                >
                    Our approach
                </Text>

                <Box
               
                >
                    <Box
                        display="grid"
                        gridTemplateColumns="auto auto auto"
                        gridGap="3.313rem"
                        marginLeft="6rem"
                        marginRight="6rem"
                       
                    > {data.map((item) => (
                        <Box
                            key={item}
                            textAlign='center'
                        >
                            <img src={item.image} alt={item.title} style={{
                                width: "4rem",
                                height: "4rem"
                            }} />
                            <Text
                                fontSize="1.5rem"
                                fontWeight="500"
                                textAlign='center'
                                paddingBottom="0.938rem"
                                paddingTop="0.5rem"
                                textColor={theme.colors.grays[800]} >
                                {item.title}
                            </Text>
                            <Text
                                fontSize="1rem"
                                textAlign="left"
                                fontWeight="400"
                                w="309px"
                                margin="auto"
                                textColor={theme.colors.grays[800]}
                            >
                                {item.description}
                            </Text>
                        </Box>))
                        }

                    </Box>

                </Box >

            </Box>
        </Box >
    );
};

export default AboutApproach;