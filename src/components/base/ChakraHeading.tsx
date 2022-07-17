import React from "react";

import { Heading } from "@chakra-ui/react";

type headingTypes = {
  children: React.ReactNode;
  size?: string;
  color?: string;
};

const ChakraHeading = ({
  children,
  size = "lg",
  color = "black",
}: headingTypes) => {
  return (
    <Heading textAlign={"center"} fontSize={size} color={color}>
      {children}
    </Heading>
  );
};

export default ChakraHeading;
