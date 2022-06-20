import { Avatar, Heading, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import Social from "../Social";

type CardTypes = {
  type: "challange" | "user";
  heading: string;
  text: string;
  avatarSrc?: string;
  avatarSize?: "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
  commentCount?: number;
  cheerCount?: number;
  margin?: string | number;
  styleProps?: object;
  onClick?: () => void;
};

const Card = ({
  type,
  avatarSize = "lg",
  avatarSrc,
  heading,
  text,
  commentCount = 0,
  cheerCount = 0,
  margin = 0,
  styleProps = {},
  onClick,
}: CardTypes) => {
  const CardStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: "5px",
    width: "100%",
    maxWidth: 610,
    height: type === "challange" ? 120 : 96,
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    padding: 16,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Box
      style={{ ...CardStyle, ...styleProps }}
      margin={margin}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Avatar size={avatarSize} src={avatarSrc}></Avatar>
      <Box marginLeft={"24px"}>
        <Heading
          size={"md"}
          marginBottom={type === "challange" ? "16px" : "8px"}
        >
          {heading}
        </Heading>
        <Text fontSize={"md"}>{text}</Text>
      </Box>
      {type === "challange" ? (
        <Flex position={"absolute"} right={"16px"} bottom={"30px"}>
          <Social type="comment" count={commentCount} size="side"></Social>
          <Social type="cheer" count={cheerCount} size="side"></Social>
        </Flex>
      ) : (
        ""
      )}
    </Box>
  );
};
export default Card;
