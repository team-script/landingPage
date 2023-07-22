
import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";



const Approach = () => {

    const data = [
        {
            id: 1,
            image: "src/assets/Home/vision 1.png",
            title: "Transparency",
            description: "We believe in complete transparency. We believe in open and honest communication and in upholding the highest ethical standards.",
        },
        {
            id: 2,
            image: "src/assets/Home/Group.png",
            title: "Connect",
            description: "We recognise that healthcare extends beyond symptoms, diagnosis, and treatment. It is the strong bond that exists between doctors and patients that leads to continuous treatment and long-term, improved outcomes.",
        },
        {
            id: 3,
            image: "src/assets/Home/trust 1.png",
            title: "Trust",
            description: "Bharat-e-clinics is based on trust. We are aware of the trust bestowed upon us by people and doctors. We have always done and will continue to do all in our power to maintain this trust.",
        },
    ];



    return (
        <Box
            h="549px"
            background="#E7F9EC"
           
        >
         <Box  margin="0 6rem 0 6rem">
         <Text
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
                padding="2rem 0 0.5rem 0"
            >
                Our approach to healthcare
            </Text>
            <Text
                fontSize="1rem"
                fontWeight="400"
                textAlign="center"
                marginBottom="4.188rem"
            >
                Our mission is to deliver healthcare that is reliable, trustworthy, and easily accessible.
            </Text>

            <Box paddingBottom="4rem"
            >
                <Box
                    display="grid"
                    gridTemplateColumns="auto auto auto"
                   
                > {data.map((item) => (
                    <Box
                        key={item}
                        textAlign='center'
                    >
                        <img src={item.image} alt={item.title} style={{
                            width: "114px",
                            height: "114px"
                        }} />
                        <Text
                            fontSize="1.5rem"
                            fontWeight="500"
                            textAlign='center'
                            paddingBottom="1.25rem"
                            paddingTop="1.25rem" >
                            {item.title}
                        </Text>
                        <Text
                         fontSize="0.875rem"
                         fontWeight="400"
                         w= "309px"
                         margin="auto"
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

export default Approach;