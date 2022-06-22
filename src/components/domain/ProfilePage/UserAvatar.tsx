import { Avatar, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface UserAvatarProps {
  image: string;
  name: string;
}

const UserAvatarContainer = styled.div`
  display: block;
  margin-right: 72px;
  text-align: center;
`;

const UserAvatar = ({ image, name }: UserAvatarProps) => {
  return (
    <UserAvatarContainer>
      <Avatar src={image} size="xl" />
      <Heading size="md" marginTop={4}>
        {name}
      </Heading>
    </UserAvatarContainer>
  );
};

export default UserAvatar;
