import Box from "src/ReusableComponents/Box";
import Button from "src/ReusableComponents/Button";
import theme from "src/theme";

const NavBar = () => {
    return (
        <Box
            h="76px"
            background={theme.colors.primary[500]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="0px 6rem"
        >
            <Box></Box>
            <Button
                borderRadius="0.25rem"
                fontSize="1rem"
                fontWeight="500"
                textColor="black"
                position="relative"
                padding="0.25rem 1.5rem"
            >
                Logout
            </Button>
        </Box>
    );
};

export default NavBar;