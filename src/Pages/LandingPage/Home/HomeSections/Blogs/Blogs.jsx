import Text from "src/ReusableComponents/Text";
import Box from "src/ReusableComponents/Box";
import Button from "src/ReusableComponents/Button";
import theme from "src/theme";

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Transforming Healthcare: The Power of Online Apps and Websites",
            image: "src/assets/Home/Blog1.png",
        },
        {
            id: 2,
            title: "Seamless Access: Convenience of Online Healthcare Platforms",
            image: "src/assets/Home/Blog2.png",
        },
        {
            id: 3,
            title: "Breaking Barriers: Online Healthcare for All",
            image: "src/assets/Home/Blog3.png",
        },
    ];
    return (
        <Box margin="3rem 6rem 0 6rem">
            <Text
                textColor="#004A53"
                fontSize="2rem"
                fontWeight="500"
                textAlign="center"
                marginBottom="1.563rem"
            >Blogs</Text>
            <Box display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gridGap="1.25rem">
                {blogs.map((blog) => (
                    <Box position="relative" key={blog.id}>
                        <img src={blog.image} alt={blog.title} style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "0.625rem"
                        }} />
                        <Box
                            position="absolute"
                            bottom="0"
                            left="0"
                            w="80%"
                            textColor="#ffffff"
                            paddingLeft="2.813rem"
                            paddingBottom="2.25rem"
                        >
                            <Text
                                margin="0"
                                paddingBottom="1.25rem"
                                fontSize="1.375rem"
                                fontWeight="500"
                                textColor="white"
                            >{blog.title}</Text>
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
                            >Read more</Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Blogs;