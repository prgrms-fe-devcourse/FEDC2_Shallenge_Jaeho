/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type inputTypes = {
  placeholder: string;
  variant: string;
  size?: string;
  width?: number | string;
  type?: string;
  children?: string;
  onChangeValue?: any;
};

const ChakraInput = ({
  children = "",
  placeholder = "placeholder입니다",
  variant = "outline",
  size = "lg",
  width = 400,
  type = "text",
  onChangeValue,
}: inputTypes) => {
  const bgColor = variant === "outline" ? "#FFFFFF" : "#E2E8F0";
  const border = variant === "outline" ? "2px solid" : "2px solid transparent";
  const borderColor = variant === "outline" ? "#E2E8F0" : "transparent";
  const [value, setValue] = useState(children);

  return (
    <Input
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        onChangeValue(event.target.value);
      }}
      name="input"
      type={type}
      placeholder={placeholder}
      size={size}
      width={width}
      variant={variant}
      border={border}
      borderColor={borderColor}
      bg={bgColor}
      _hover={{ bg: bgColor }}
    />
  );
};

export default ChakraInput;
