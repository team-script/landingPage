import { useState } from "react";
import "./Carousel.css";
import Left from "src/assets/Home/ArrowLeft.png"
import Right from "src/assets/Home/ArrowRight.png"
import Button from "src/ReusableComponents/Button";
import Box from "src/ReusableComponents/Box";
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        "src/assets/Home/close-up-patient-talking-doctor-online.png",
        "src/assets/Home/close-up-patient-talking-doctor-online.png",
        "src/assets/Home/close-up-patient-talking-doctor-online.png",
        "src/assets/Home/close-up-patient-talking-doctor-online.png"
    ];

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goPrev = () => {
        const newIndex = (currentSlide + images.length - 1) % images.length;
        setCurrentSlide(newIndex);
    };

    const goNext = () => {
        const newIndex = (currentSlide + 1) % images.length;
        setCurrentSlide(newIndex);
    };

    return (
        <Box

            w="72%"
            position="relative"
            marginBottom="2rem"
            marginLeft="auto"
            marginRight="auto"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gridGap="1rem">

                <Button
                    borderRadius="50%"
                    onClick={goPrev}>
                    <img src={Left} alt="" />
                </Button>

                <Box>
                    <Box overflow="hidden"
                        // w="860px"
                        // h="404px"
                        borderRadius="0.5rem"
                        border="2px solid  #D9D9D9" >
                        <Box
                            display="flex"
                            transition="transform 0.3s ease-in-out"
                            transform={`translateX(-${currentSlide * 100}%)`}
                        >
                            {images.map((imageUrl, index) => (
                                <Box
                                    flex="0 0 100%"
                                    width="100%"
                                    key={index}
                                >
                                    <img src={imageUrl} alt={`Slide ${index + 1}`} style={{
                                        width: "100%",
                                        height: "auto"
                                    }} />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box position="absolute"
                        top="90%"
                        left="47%"
                        display="flex"
                        justifyContent="center"
                        gridGap="0.25rem" >
                        {images.map((imageUrl, index) => (
                            <Box
                                key={index}
                                w="0.5rem"
                                h="0.5rem"
                                borderRadius="50%"
                                bgc="white"
                                cursor="pointer"

                                className={`dot ${index === currentSlide ? "active" : ""}`}
                                onClick={() => goToSlide(index)}
                            ></Box>
                        ))}
                    </Box>
                </Box>


                <Button
                    borderRadius="50%"
                    onClick={goNext}>
                    <img src={Right} alt="" />
                </Button>

            </Box>


        </Box>
    );
};

export default Carousel;

