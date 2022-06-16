import React from "react";
import { Heading, TypographyProps } from "@chakra-ui/react";

type headingTypes = {
  children: React.ReactNode;
  size?: string;
  align?: TypographyProps["textAlign"];
  color?: string;
};

const ChakraHeading = ({
  children,
  size = "lg",
  align = "center",
  color = "black",
}: headingTypes) => {
  return (
    <Heading textAlign={align} fontSize={size} color={color}>
      {children}
    </Heading>
  );
};

export default ChakraHeading;
