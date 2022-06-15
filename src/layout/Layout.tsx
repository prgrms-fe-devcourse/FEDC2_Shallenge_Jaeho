import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ChakraInput from "@base/ChakraInput";
import { Box, Flex, Heading } from "@chakra-ui/react";

type LayoutTypes = {
  children: React.ReactNode;
  type: "input" | "text";
  text: string;
};
const Layout = ({ children, type, text }: LayoutTypes) => {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" alignItems="center">
        <Flex position="sticky">
          <Header>
            {type === "input" ? (
              <ChakraInput text={text} variant="filled"></ChakraInput>
            ) : (
              <Heading size="xl" color="#ff7900">
                {text}
              </Heading>
            )}
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

export default Layout;
