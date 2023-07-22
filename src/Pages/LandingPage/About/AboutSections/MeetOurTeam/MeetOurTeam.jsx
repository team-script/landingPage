import { useState } from "react";
import Left from "src/assets/About/LeftTeamArrow.png"
import Right from "src/assets/About/RightTeamArrow.png"
import Button from "src/ReusableComponents/Button";
import Box from "src/ReusableComponents/Box";
import Line2 from "src/assets/About/line-Black.png"
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";

const MeetOurTeam = () => {
    const team = [
        {
            name: "Lorem Ipsum",
            title: "Lorem Ipsum",
            image: "src/assets/About/Person1.png"
        },
        {
            name: "Lorem Ipsum",
            title: "Lorem Ipsum",
            image: "src/assets/About/Person2.png"
        },
        {
            name: "Lorem Ipsum",
            title: "Lorem Ipsum",
            image: "src/assets/About/Person3.png"
        },
        {
            name: "Lorem Ipsum",
            title: "Lorem Ipsum",
            image: "src/assets/About/Person2.png"
        },
        {
            name: "Lorem Ipsum",
            title: "Lorem Ipsum",
            image: "src/assets/About/Person3.png"
        },
     
    ];

    const [currentMember, setCurrentMember] = useState(0);

    const previousSlide = () => {
        setCurrentMember((prevMember) => (prevMember === 0 ? team.length - 4 : prevMember - 1));
    };

    const nextSlide = () => {
        setCurrentMember((prevMember) => (prevMember === team.length - 4 ? 0 : prevMember + 1));
    };

    return (
        <Box
            margin="2rem 6rem 0 6rem"
        >
            <Text
                textColor={theme.colors.grays[900]}
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
            // marginBottom="72px"
            >Meet Our Team</Text>
            <Box
                display="flex"
                justifyContent="center"
            >
                <img src={Line2} alt="Line" style={{

                }} />
            </Box>
            <Box 
           display="flex"
           justifyContent="center"
           alignItems="center"
            >
            <Button onClick={previousSlide}>
                    <img src={Left} alt="" />
                </Button>
            <Box
                overflow="hidden"
            >
                <Box
                    display="flex"
                    transition="transform 0.5s ease-in-out"
                    style={{ transform: `translateX(-${currentMember * 70}%)` }}>
                    {team.map((member, Member) => (
                        <Box
                            key={Member}
                            width="50%"
                            flex="0 1 45%"
                            fontSize="1.5rem"
                        >
                            <Box
                              margin="54px 37px 15px 0"
                            >
                                <img src={member.image} alt="" />
                                <Text
                                    fontSize="1.5rem"
                                    fontWeight="400"
                                >{member.name}</Text>
                                <Text
                                    fontSize="1rem"
                                    fontWeight="400"
                                >{member.title}</Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Button onClick={nextSlide}> <img src={Right} alt="" /></Button>
            </Box>
          
        </Box>
    );
};

export default MeetOurTeam;