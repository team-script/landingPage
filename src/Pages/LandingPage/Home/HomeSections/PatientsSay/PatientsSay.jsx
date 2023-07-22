import { useState } from "react";
import Left from "src/assets/Home/LeftButton.png"
import Right from "src/assets/Home/RightButton.png"
import Button from "src/ReusableComponents/Button";
import Box from "src/ReusableComponents/Box";
import theme from "src/theme";
import Text from "src/ReusableComponents/Text";

const PatientsSay = () => {
    
    const slides = [
        { patient: 'Lorem Ipsum', title: 'Lorem ipsum dolor sit', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag Ut enim ad minim veniam, quis nostrud', },
        { patient: 'Lorem Ipsum', title: 'Lorem ipsum dolor sit', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag Ut enim ad minim veniam, quis nostrud', },
        { patient: 'Lorem Ipsum', title: 'Lorem ipsum dolor sit', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag Ut enim ad minim veniam, quis nostrud', },
        { patient: 'Lorem Ipsum', title: 'Lorem ipsum dolor sit', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag Ut enim ad minim veniam, quis nostrud', },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 2 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 2 ? 0 : prevIndex + 1));
    };

    return (
        <Box
            margin="2rem 6rem 0 6rem"
        >
            <Text
                textColor="#004A53"
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
                marginBottom="1.563rem"
            >What our patients say about us</Text>
            <Box
                overflow="hidden"
            >
                <Box
                    display="flex"
                    gridGap="3.75rem"
                    transition="transform 0.5s ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
                    {slides.map((slide, index) => (
                        <Box
                            key={index}
                            background={theme.colors.primary[500]}
                            display="flex"
                            width="50%"
                            flex="0 0 45%"
                            padding="0.625rem"
                            textAlign="center"
                            textColor="#333"
                            fontSize="1.5rem"
                        >
                            <Text
                                textColor="#FFE7E7" marginTop="0.938rem"
                                marginLeft="2.5rem"
                                fontSize="6.25rem"
                            >“</Text>
                            <Box
                                margin="3.75rem 2.5rem 50px 2.5rem"
                            >
                                <Text
                                    textColor="#FFE7E7"
                                    textAlign="justify"
                                    fontSize="17px"
                                    fontWeight="400"
                                    marginBottom="3.125rem"
                                >{slide.details}</Text>
                                <Box
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    gridGap="0.938rem"
                                >
                                    <Text
                                        textColor="#FFE7E7"
                                        fontSize="1.5rem"
                                        fontWeight="400"
                                    >{slide.patient}</Text>
                                    <Text
                                        textColor="#FFE7E7"
                                        fontSize="1rem"
                                        fontWeight="400"
                                    >{slide.title}</Text>
                                </Box>

                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box
            display="flex"
            justifyContent="center"
            marginTop="0.625rem"
            >
                <Button onClick={previousSlide}>
                    <img src={Left} alt="" />
                </Button>
                <Button onClick={nextSlide}> <img src={Right} alt="" /></Button>
            </Box>
        </Box>
    );
};

export default PatientsSay;