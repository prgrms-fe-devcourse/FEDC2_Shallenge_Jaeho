import { Link } from "react-router-dom";
import { useAtom } from "jotai";

import userAtom from "@store/user";
import Icon from "@base/Icon";
import ChakraText from "@base/ChakraText";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  const [myUser] = useAtom(userAtom);

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

      {myUser ? (
        <Link to="/my/profile">
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="5px"
            cursor="pointer"
          >
            <Icon name="user" />
            <ChakraText size="md">{myUser.fullName}</ChakraText>
          </Flex>
        </Link>
      ) : (
        <Link to="/login">
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="5px"
            cursor="pointer"
          >
            <Icon name="user" />
            <ChakraText size="md">로그인</ChakraText>
          </Flex>
        </Link>
      )}
    </Flex>
  );
};

export default Footer;
