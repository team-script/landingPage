import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import line from "src/assets/Home/line-2.png";


const TopDoctors = () => {
    const TopDoctorsList = [

        { id: 1, title: "Pediatrician", image: "src/assets/Home/TopDoctor1.png" },
        { id: 2, title: "Dermatologist", image: "src/assets/Home/TopDoctor2.png" },
        { id: 3, title: "Dentist", image: "src/assets/Home/TopDoctor3.png" },
        { id: 4, title: "Neurologist", image: "src/assets/Home/TopDoctor4.png" },
        { id: 5, title: "Gynecologist", image: "src/assets/Home/TopDoctor5.png" },
        { id: 6, title: "Cardiologists", image: "src/assets/Home/TopDoctor6.png" },
        { id: 7, title: "General practitioner", image: "src/assets/Home/TopDoctor7.png" },
        { id: 8, title: "Endocrinologists", image: "src/assets/Home/TopDoctor8.png" },
    ]

    return (
        <Box
            background={theme.colors.primary[500]}
            padding="2rem 6rem 2.5rem 6rem"
        >
            <Box
                textAlign="center"
            >
                <Text
                    fontSize="2rem"
                    fontWeight="500"
                    textColor="white"
                    display="inline"
                    marginRight="0.313rem"
                >
                    Consult our top doctors for exceptional care <br />and expert medical advice

                </Text>
                <img src={line} alt="Line" />
            </Box >
            <Box>
              
                <Box
                    display="flex"
                    w="106%"
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    gridGap="1rem"
                    flexWrap="wrap"
                    marginTop="4rem">
                    {
                        TopDoctorsList.map((item) => (
                            <Box
                                key={item}
                                position="relative"
                                w="231px"
                            >
                                <img src={item.image} alt={item.title} />
                                <Text
                                    position='absolute'
                                    top='50%'
                                    left='50%'
                                    transform='translate(-50%, -50%)'
                                    textAlign='center'
                                    textColor='white'
                                    padding='10px'

                                >
                                    {item.title}
                                </Text>
                            </Box>))
                    }

                </Box>

            </Box >
        </Box >
    );
};

export default TopDoctors;