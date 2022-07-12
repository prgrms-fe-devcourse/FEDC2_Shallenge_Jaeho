import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const ChakraText = ({ children, size = "lg", color = "black" }: Props) => {
  return (
    <Text textAlign="center" fontSize={size} color={color}>
      {children}
    </Text>
  );
};

export default ChakraText;
