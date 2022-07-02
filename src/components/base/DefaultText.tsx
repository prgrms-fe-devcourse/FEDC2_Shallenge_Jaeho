import React from "react";

import { Text } from "@chakra-ui/react";

type DefaultTextTypes = {
  children: React.ReactNode;
  styleProps?: React.CSSProperties;
};

const DefaultText = ({ children, styleProps = {} }: DefaultTextTypes) => {
  return (
    <Text
      fontSize="lg"
      paddingTop="80px"
      color="#727272"
      textAlign="center"
      lineHeight="1.6"
      style={styleProps}
    >
      {children}
    </Text>
  );
};

export default DefaultText;
