import React from "react";

import { Avatar, Heading, Text, Box, Flex } from "@chakra-ui/react";

import Social from "../Social";

interface Props {
  type: "challenge" | "user";
  heading: string;
  text: string;
  userInfo?: boolean;
  avatarSrc?: string;
  commentCount?: number;
  cheerCount?: number;
  margin?: string | number;
  author?: string;
  styleProps?: object;
  onClick?: () => void;
}

const Card = ({
  type,
  avatarSrc,
  heading,
  text,
  userInfo = true,
  commentCount = 0,
  cheerCount = 0,
  margin = 0,
  author = "username",
  styleProps = {},
  onClick,
}: Props) => {
  return (
    <Flex
      position="relative"
      borderRadius="5px"
      height={type !== "user" ? "120px" : "96px"}
      backgroundColor="#ffffff"
      alignItems="center"
      padding="16px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      style={{ ...styleProps }}
      margin={margin}
      _hover={{ cursor: "pointer" }}
      onClick={onClick}
    >
      {userInfo ? (
        <Flex flexDirection="column" width="80px" alignItems="center">
          <Avatar size="lg" src={avatarSrc}></Avatar>
          {type !== "user" ? (
            <Text textAlign="center" size="xs">
              {author}
            </Text>
          ) : (
            ""
          )}
        </Flex>
      ) : (
        ""
      )}
      <Flex
        flexDirection="column"
        marginLeft={"24px"}
        overflow="hidden"
        width={{ base: "30vw", sm: "35vw" }}
        maxWidth="350px"
      >
        <Heading
          size={{ base: "sm", sm: "md" }}
          marginBottom={type !== "user" ? "16px" : "8px"}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {text}
        </Text>
      </Flex>
      {type !== "user" ? (
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
