import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  styleProps?: React.CSSProperties;
}

const DefaultText = ({ children, styleProps = {} }: Props) => {
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
