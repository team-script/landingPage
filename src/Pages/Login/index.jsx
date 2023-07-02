import { Col, Row } from "antd";
import React from "react";
import Box from "src/ReusableComponents/Box";
import LoginImage from "src/assets/LoginImage.svg";
import LoginPage from "./components/LoginPage";
import { Grid } from "@mui/material";

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box>
          <img
            src={LoginImage}
            alt="image"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <LoginPage />
      </Grid>
    </Grid>
  );
};

export default Login;
