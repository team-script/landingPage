import { Grid } from "@mui/material";
import { Alert, Tag } from "antd";
import React from "react";
import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";
import Doctor from "src/assets/Doctor.svg";
import Star from "src/assets/star.svg";
import theme from "src/theme";

const DoctorCard = ({
  title,
  subtitle,
  reviews,
  stars,
  description,
  callActive,
  i,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Box borderRadius="1.25rem">
          <img src={Doctor} alt="doctor" width={"100%"} />
        </Box>
      </Grid>
      <Grid item xs={9}>
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="5.31rem"
          position="relative"
        >
          <Text fontSize="1.25rem" fontWeight="500" margin="0.32rem 0">
            {title}
          </Text>
          <Text fontSize="1rem" fontWeight="500">
            {subtitle}
          </Text>
          {/* stars */}
          <Box margin="0.62rem 0" display="flex" alignItems="center">
            <Box>
              <img
                src={Star}
                alt="star"
                height={"20px"}
                style={{ marginRight: "0.62rem" }}
              />
              <img
                src={Star}
                alt="star"
                height={"20px"}
                style={{ marginRight: "0.62rem" }}
              />
              <img
                src={Star}
                alt="star"
                height={"20px"}
                style={{ marginRight: "0.62rem" }}
              />
              <img
                src={Star}
                alt="star"
                height={"20px"}
                style={{ marginRight: "0.62rem" }}
              />
            </Box>
            <Box marginLeft="4.31rem">
              <Text fontSize="0.75rem" fontWeight="400">
                {reviews} reviews
              </Text>
            </Box>
          </Box>
          <Box>
            <Text lineHeight="200%" fontSize="0.875rem" fontWeight="400px">
              {description}
            </Text>
          </Box>
          <Tag
            color={i % 2 ? "green" : "red"}
            style={{
              width: "fit-content",
              position: "absolute",
              bottom: "-85px",
              right: "0px",
              fontSize: "0.75rem",
            }}
          >
            {i % 2 ? "Avialable" : "Not Avialable"}
          </Tag>
          <Box
            background={theme.colors.white[900]}
            //h="40px"
            w="7.1rem"
            position="absolute"
            bottom="-138px"
            right="0px"
            display="flex"
            padding="0.4rem 0.9375rem"
            b="1px solid #D9D9D9"
            borderRadius="4px"
            alignItems="center"
            justifyContent="space-evenly"
            cursor={!callActive ? "not-allowed" : "pointer"}
          >
            <Text
              marginLeft="12px"
              fontSize="1rem"
              textColor="rgba(0, 0, 0, 0.25)"
            >
              Call
            </Text>
          </Box>
        </Box>
      </Grid>
      <Box h="1px" w="100%" background="#D9D9D9" margin="1.31rem 0" />
    </Grid>
  );
};

export default DoctorCard;
