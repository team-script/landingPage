import { useState } from "react";
import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import Arrow from "src/assets/About/Polygon.png"
import theme from "src/theme";

const FAQ = () => {
    const QAData = [
        {
            id: 1,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 2,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 3,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 4,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 5,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: 6,
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
            answer: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },

    ];

    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (id) => {
        if (activeQuestion === id) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
    };
    return (
        <Box
        >
            <Text
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
                paddingTop="4rem"
                paddingBottom="30px"
                textColor={theme.colors.grays[900]}
              
            >
               Frequently Asked Questions
            </Text>
            <Box
                margin="3.75rem auto 0 auto"
                display="flex"
                alignItems="flex-start"
                justifyContent="center"
            >
                <Box
                    width="1063px"
                    height="470px"

                >
                    {QAData.map((item) => (
                        <Box
                            marginBottom="35px"
                            key={item.id}>

                            {/* Question  */}
                            <Box
                                gap="0.625rem"
                                onClick={() => toggleQuestion(item.id)}
                            >
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gridGap="30px"
                                >
                                    <img src={Arrow} alt="" />
                                    <Text
                                      fontSize="1.125rem"
                                      fontWeight="500"
                                    >{item.question}</Text>

                                </Box>

                            </Box>
                            {/* answer  */}

                            {
                                activeQuestion === item.id
                                &&
                                <Text
                                fontSize="0.875rem"
                                fontWeight="400"
                                w="909px"
                                    padding="1.25rem 3rem 0 3rem"
                                >{item.answer}</Text>
                            }

                            <Box>
                                {
                                    activeQuestion !== item.id
                                    &&
                                    <hr style={{

                                        width: "1063px",
                                        height: "0.5px",
                                        background: "rgba(0, 0, 0, 0.25)"
                                    }} />

                                }
                            </Box>

                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FAQ;