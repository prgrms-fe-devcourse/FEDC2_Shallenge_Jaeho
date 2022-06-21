import Icon from "@base/Icon";
import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";

const Comment = ({
  isGuest = true,
  avatarSrc = undefined,
  commentAuthor = "author.fullName",
  commentContent = "Lorem ipsum dolor sit, amet consectetur",
  commentCreatedAt = "2022-06-23 17:23",
}) => {
  const avatarSize = "md";
  return (
    <Flex
      padding="15px"
      bg="#FFFFFF"
      borderRadius="5px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      gap="20px"
    >
      <Avatar size={avatarSize} src={avatarSrc}></Avatar>
      <Flex direction="column" w="100%" gap="10px">
        <Flex w="100%" justifyContent="space-between">
          <Heading size="sm">{commentAuthor}</Heading>
          <Flex alignItems="flex-end" gap="5px">
            <Text fontSize="md" color="#838489">
              {commentCreatedAt}
            </Text>
            {isGuest ? (
              <Box width="16px" height="16px" bg="transparent" />
            ) : (
              <Flex _hover={{ cursor: "pointer" }}>
                <Icon name="trash-2" size={16} color="#FF5A5A" />
              </Flex>
            )}
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
