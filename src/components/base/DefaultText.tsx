import { Text } from "@chakra-ui/react";
import React from "react";

type DefaultTextTypes = {
  children: React.ReactNode;
};

const DefaultText = ({ children }: DefaultTextTypes) => {
  return (
    <Text
      fontSize="lg"
      paddingTop="80px"
      color="#727272"
      textAlign="center"
      lineHeight="1.6"
    >
      {children}
    </Text>
  );
};

export default DefaultText;
