import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Icon from "@/base/Icon";

interface Prop {
  isGuest: boolean;
  avatarSrc: string | undefined;
  commentAuthor: string;
  commentAuthorId: string;
  commentContent: string;
  commentCreatedAt: string;
}

const CommentCard = ({
  isGuest = true,
  avatarSrc = undefined,
  commentAuthor,
  commentAuthorId,
  commentContent,
  commentCreatedAt,
}: Prop) => {
  const avatarSize = "md";
  const navigate = useNavigate();

  const onUserClick = (userId: string) => {
    navigate(`/profile/${userId}`, { state: userId });
  };

  return (
    <Flex
      padding="15px"
      bg="#FFFFFF"
      borderRadius="5px"
      boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      gap="20px"
    >
      <Avatar
        size={avatarSize}
        src={avatarSrc}
        onClick={() => {
          onUserClick(commentAuthorId);
        }}
        _hover={{ cursor: "pointer" }}
      ></Avatar>
      <Flex direction="column" w="100%" gap="10px">
        <Flex w="100%" justifyContent="space-between">
          <Heading
            size="sm"
            onClick={() => {
              onUserClick(commentAuthorId);
            }}
            _hover={{ cursor: "pointer" }}
          >
            {commentAuthor}
          </Heading>
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

export default CommentCard;
