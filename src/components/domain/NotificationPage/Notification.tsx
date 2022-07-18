import { Flex, Avatar, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  avatarSrc: string;
  userName: string;
  notificationType: "follow" | "comment" | "like";
  createdAt: string;
  onClick?: () => void;
}

const Notification = ({
  avatarSrc,
  userName,
  notificationType,
  createdAt,
  onClick,
}: Props) => {
  const notifiedTime = new Date(createdAt).toLocaleString().slice(2, 20);

  return (
    <Flex
      alignItems="center"
      height="96px"
      padding="0 16px"
      backgroundColor="white"
      onClick={onClick}
    >
      <Avatar size="lg" src={avatarSrc} marginRight="16px" />
      <div>
        <Flex>
          <UserNameText>{userName}</UserNameText>
          <Text>
            님이
            {notificationType === "follow"
              ? " 나를 팔로우했어요 😊"
              : notificationType === "comment"
              ? " 댓글을 남겼어요 🪧"
              : " 나를 응원했어요 🎉"}
          </Text>
        </Flex>
        <Text fontSize="sm" marginTop={2}>
          {notifiedTime}
        </Text>
      </div>
    </Flex>
  );
};

export default Notification;

const UserNameText = styled.span`
  font-weight: bold;
`;
