import { useState } from "react";
import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import theme from "src/theme";
import Recharge from "src/assets/Recharge.svg";
import RadioButton from "src/ReusableComponents/Radio";
import DoctorCard from "./components/DoctorCard";

const DoctorsList = () => {
  const [state, setState] = useState({
    peadiatrition: true,
    Dermatologist: false,
    "General practitioner": false,
    Pediatrics: false,
    Cardiologists: false,
    Neurologist: false,
    Gynecologist: false,
    Dentist: false,
    "Family Physicians": false,
    Endocrinologists: false,
  });
  const handleClick = (key, value) => {
    setState({ ...state, [key]: !value });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" marginTop="4.49rem">
        <Box>
          <Text fontSize="2rem" fontWeight="500">
            Choose your doctor
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            background={theme.colors.white[900]}
            h="40px"
            w="138px"
            display="flex"
            padding="6px 15px 6px 15px"
            b="1px solid #D9D9D9"
            borderRadius="4px"
            alignItems="center"
            cursor="pointer"
            marginRight="1.94rem"
          >
            <Text marginLeft="12px">No. of visits: 5</Text>
          </Box>
          <Box
            background={theme.colors.primary[500]}
            h="40px"
            w="138px"
            display="flex"
            padding="6px 15px 6px 15px"
            b="1px solid #D9D9D9"
            borderRadius="4px"
            alignItems="center"
            cursor="pointer"
            justifyContent="space-evenly"
          >
            <img src={Recharge} alt="recharge" />
            <Text textColor="white">Recharge</Text>
          </Box>
        </Box>
      </Box>
      {/* line */}
      <Box h="1px" w="100%" background="black" margin="1.31rem 0" />
      <Box display="flex" flexWrap="1">
        {Object.entries(state).map(([key, value], i) => (
          <RadioButton
            name={key}
            index={i}
            isActive={value}
            handleClick={() => handleClick(key, value)}
            margin="2.19rem"
          />
        ))}
      </Box>
      <Box
        background={theme.colors.primary[400]}
        borderRadius="1.25rem"
        padding="1.25rem 2.5rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="1.19rem 0"
      >
        <Text fontSize="1.5rem" fontWeight="500">
          Available Doctors
        </Text>
        <Box
          background={theme.colors.primary[500]}
          h="40px"
          w="138px"
          display="flex"
          padding="6px 15px 6px 15px"
          b="1px solid #D9D9D9"
          borderRadius="4px"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Text textColor="white">Request a Call</Text>
        </Box>
      </Box>
      {/* list */}
      <Box marginTop="3.75rem">
        {[1, 2, 3, 4, 5].map((item) => (
          <DoctorCard
            key={item}
            title={"Lorem Ipsum"}
            subtitle={"Pediatrician"}
            callActive={false}
            reviews={123}
            stars={4}
            i={item}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex `}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DoctorsList;
