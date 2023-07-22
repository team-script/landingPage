import Box from "src/ReusableComponents/Box";
import theme from "src/theme";
import User from "src/assets/Home/User.png"
import Add from "src/assets/Home/Add.png"
import Download from "src/assets/Home/Download.png"
import Call from "src/assets/Home/Call.png"
import Text from "src/ReusableComponents/Text";
const ConsultationBooking = () => {
    return (
        <Box display="flex"
            justifyContent="center"
            alignItem="center"
        >
            <Box
                background={theme.colors.primary[500]}
            >
                <Box
                    display="flex"
                >
                    <Box
                        w="289px"
                        padding="4.313rem 2.25rem 0 5.93rem"
                    >
                        <Box
                            background="white"
                            w="50px"
                            h="50px"
                            borderRadius="50%"
                            marginLeft="auto"
                            marginRight="auto"
                            marginBottom="0.563rem">
                            <img src={Download} alt="Download" style={{ padding: "0.813rem" }} />
                        </Box>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="1.5rem"
                            fontWeight="500"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Download and install
                        </Text>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="0.875rem"
                            fontWeight="400"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Find and install the eClinic app from your device's app store.
                        </Text>
                    </Box>
                    <Box
                        w="289px"
                        padding="10.563rem 3.063rem 0 0"
                    >
                        <Box
                            background="white"
                            w="50px"
                            h="50px"
                            borderRadius="50%"
                            marginLeft="auto"
                            marginRight="auto"
                            marginBottom="0.563rem">
                            <img src={User} alt="User" style={{ padding: "0.813rem" }} />
                        </Box>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="1.5rem"
                            fontWeight="500"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Create Account and Profile
                        </Text>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="0.875rem"
                            fontWeight="400"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Sign up and complete your profile within the app.
                        </Text>
                    </Box>
                </Box>
                <Box
                    display="flex"
                >
                    <Box
                        w="289px"
                        padding="0 2.25rem 100px 5.93rem"
                    >
                        <Box
                            background="white"
                            w="50px"
                            h="50px"
                            borderRadius="50%"
                            marginLeft="auto"
                            marginRight="auto"
                            marginBottom="0.563rem">
                            <img src={Add} alt="Add" style={{ padding: "0.813rem" }} />
                        </Box>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="1.5rem"
                            fontWeight="500"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Find a Eclinic and Schedule consultation
                        </Text>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="0.875rem"
                            fontWeight="400"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Browse and select a doctor, then book an appointment.
                        </Text>
                    </Box>
                    <Box
                        w="289px"
                        padding="6.25rem 3.063rem 4.313rem 0"
                    >
                        <Box
                            background="white"
                            w="50px"
                            h="50px"
                            borderRadius="50%"
                            marginLeft="auto"
                            marginRight="auto"
                            marginBottom="0.563rem">
                            <img src={Call} alt="Call" style={{ padding: "0.813rem" }} />
                        </Box>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="1.5rem"
                            fontWeight="500"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Access Online Consultation
                        </Text>
                        <Text
                            textColor="#FFE7E7"
                            fontSize="0.875rem"
                            fontWeight="400"
                            marginBottom="0.313rem"
                            textAlign="center"
                        >
                            Log in, join the virtual waiting room, and consult with the doctor.
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box
                margin="auto 6rem auto 4.5rem"
            >
                <Text
                    textColor="#004A53"
                    fontSize="2rem"
                    fontWeight="500"
                >Effortless Video Consultation Booking</Text>
                <Text
                    textColor="#004A53"
                    fontSize="1rem"
                    fontWeight="400"
                    textAlign="justify"
                >Experience seamless healthcare with experts across the country. Book video consultations through a nearby e-clinics. Embrace the convenience of virtual appointments for personalized medical advice and expert guidance at your fingertips.</Text>
            </Box>
        </Box>
    );
};

export default ConsultationBooking;