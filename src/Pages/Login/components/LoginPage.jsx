import { Input } from "antd";
import React, { useState } from "react";
import Box from "src/ReusableComponents/Box";
import Text from "src/ReusableComponents/Text";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Box display="flex" alignItems="center" h="100%" flexDirection="column">
      <Box>
        <Text fontSize="2rem" fontWeight="500" textColor="black">
          Welcome Back!
        </Text>
        <Text fontSize="2rem" fontWeight="500">
          Sign In to Your Profile
        </Text>
      </Box>
      <Box display="flex" justifyContent="start" flexDirection="column">
        <label htmlFor="username">UserId</label>
        <Input id="username" />
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
