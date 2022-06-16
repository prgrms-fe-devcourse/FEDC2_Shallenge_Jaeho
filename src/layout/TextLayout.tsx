import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { Box, Flex, Heading } from "@chakra-ui/react";

type TextLayoutTypes = {
  children: React.ReactNode;
  text: string;
};
const TextLayout = ({ children, text }: TextLayoutTypes) => {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width="640px" alignItems="center">
        <Flex position="sticky" width="100%">
          <Header>
            <Heading size="xl" color="#ff7900">
              {text}
            </Heading>
          </Header>
        </Flex>
        <Box
          width="100%"
          height="calc(100vh - 96px - 80px - 32px)"
          overflowY="auto"
          backgroundColor="#F4F6F8"
          padding="0 15px"
        >
          {children}
        </Box>
        <Flex justifyContent="center" position="sticky">
          <Footer width={640} height={96}></Footer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TextLayout;
