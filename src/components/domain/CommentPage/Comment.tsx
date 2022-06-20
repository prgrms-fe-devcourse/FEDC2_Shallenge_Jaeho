import Icon from "@base/Icon";
import { Avatar, Flex, Heading, Text } from "@chakra-ui/react";

// API 추가시 comment 객체 prop으로 받도록 작성하면 완성
const Comment = () => {
  const avatarSize = "md";
  const avatarSrc = undefined; // API추가시 author.image
  const commentAuthor = "author.fullName";
  const commentContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse tempore dolore quisquam iure asperiores, expedita eum soluta aliquid voluptatum quia natus ut laborum, aspernatur quos! Quaerat ipsum commodi nesciunt dolore.";
  const commentCreated = "2022-06-23"; // createdAt
  return (
    <Flex
      padding="15px"
      bg="#FFFFFF"
      borderRadius="5px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      gap="20px"
    >
      <Avatar size={avatarSize} src={avatarSrc}></Avatar>
      <Flex direction="column" w="100%" gap="5px">
        <Flex w="100%" justifyContent="space-between">
          <Heading size="sm">{commentAuthor}</Heading>
          <Flex alignItems="flex-end" gap="5px">
            <Text fontSize="md" color="#838489">
              {commentCreated}
            </Text>
            <Icon name="trash-2" size={16} color="#FF5A5A"></Icon>
          </Flex>
        </Flex>
        <Text fontSize="lg" wordBreak="break-all">
          {commentContent}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
