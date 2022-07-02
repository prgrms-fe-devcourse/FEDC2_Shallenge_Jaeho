import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ChakraText from "@/base/ChakraText";
import Icon from "@/base/Icon";
import { User } from "@/types/index";

interface Props {
  user: User | null;
}

const Footer = ({ user }: Props) => {
  return (
    <Flex justifyContent="space-around" alignItems="center" w="100%" h="96px">
      <Link to="/">
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="5px"
          cursor="pointer"
        >
          <Icon name="home" />
          <ChakraText size="md">홈</ChakraText>
        </Flex>
      </Link>
      <Link to="/challenges">
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="5px"
          cursor="pointer"
        >
          <Icon name="compass" />
          <ChakraText size="md">채널</ChakraText>
        </Flex>
      </Link>
      <Link to="/my/notifications">
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="5px"
          cursor="pointer"
        >
          <Icon name="bell" />
          <ChakraText size="md">알림</ChakraText>
        </Flex>
      </Link>
      <Link to={user ? "/my/profile" : "/login"}>
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="5px"
          cursor="pointer"
        >
          <Icon name="user" />
          <ChakraText size="md">{user ? "정보" : "로그인"}</ChakraText>
        </Flex>
      </Link>
    </Flex>
  );
};

export default Footer;
