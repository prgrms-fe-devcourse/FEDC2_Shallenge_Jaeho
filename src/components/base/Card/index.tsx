import React from "react";

import { Avatar, Heading, Text, Box, Flex } from "@chakra-ui/react";

import Social from "../Social";
import styled from "@emotion/react";

type CardTypes = {
  type: "challenge" | "user";
  heading: string;
  text: string;
  avatarSrc?: string;
  avatarSize?: "2xs" | "xs" | "sm" | "lg" | "xl" | "2xl";
  commentCount?: number;
  cheerCount?: number;
  margin?: string | number;
  author?: string;
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
  author = "username",
  styleProps = {},
  onClick,
}: CardTypes) => {
  const CardStyle: React.CSSProperties = {
    position: "relative",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "610px",
    height: type === "challenge" ? 120 : 96,
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 16,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Flex
      style={{ ...CardStyle, ...styleProps }}
      margin={margin}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Flex flexDirection="column" width="64px" alignItems="center">
        <Avatar size={avatarSize} src={avatarSrc}></Avatar>
        {type === "challenge" ? <Text textAlign="center">{author}</Text> : ""}
      </Flex>
      <Flex
        flexDirection="column"
        marginLeft={"24px"}
        overflow="hidden"
        width="35vw"
        maxWidth="350px"
      >
        <Heading
          size={"md"}
          marginBottom={type === "challenge" ? "16px" : "8px"}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {heading}
        </Heading>
        <Text
          fontSize={"md"}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {text}
        </Text>
      </Flex>
      {type === "challenge" ? (
        <Flex position={"absolute"} right={"16px"} bottom={"30px"}>
          <Social type="comment" count={commentCount} size="side"></Social>
          <Social type="cheer" count={cheerCount} size="side"></Social>
        </Flex>
      ) : (
        <div></div>
      )}
    </Flex>
  );
};
export default Card;
