import Icon from "@base/Icon";
import ChakraText from "@base/ChakraText";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  const footerList = [
    {
      name: "home",
      nameKor: "홈",
    },
    {
      name: "compass",
      nameKor: "채널",
    },
    {
      name: "bell",
      nameKor: "알림",
    },
    {
      name: "user",
      nameKor: "로그인",
    },
  ];

  return (
    <Flex justifyContent="space-around" alignItems="center" w="100%" h="96px">
      {footerList.map((item) => (
        <Flex
          key={item.name}
          flexDirection="column"
          alignItems="center"
          gap="5px"
          cursor="pointer"
        >
          <Icon name={item.name} />
          <ChakraText size="md">{item.nameKor}</ChakraText>
        </Flex>
      ))}
    </Flex>
  );
};

export default Footer;
