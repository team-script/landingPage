/* eslint-disable  */

import React from "react";
import { useHistory } from "react-router";
import ArrowRight from "../../assets/ArrowRight.svg";
import theme from "../../theme";
import Box from "../Box";
import Text from "../Text";

const Breadcrumbs = ({ list }) => {
  const history = useHistory();
  const handleClick = (link) => link && history.push(link);
  return (
    <Box display="flex" marginTop="1.5rem" marginBottom="0.625rem" padding="5px 0">
      {list.map(({ name, icon, link }, i) => (
        <Box display="flex" key={name} onClick={() => handleClick(link)}>
          <Text
            fontSize={theme.typograpgy.body.size}
            fontWeight={theme.typograpgy.body.weight}
            margin={0}
            textColor={i === list.length - 1 && theme.colors.grays[600]}
            cursor="pointer"
          >
            {name}
          </Text>
          {icon && <img src={ArrowRight} style={{ margin: "0 12px" }} />}
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
