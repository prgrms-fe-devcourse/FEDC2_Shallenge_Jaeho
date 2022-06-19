import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ChakraInput from "@base/ChakraInput";
import { Box, Flex } from "@chakra-ui/react";

type InputLayoutTypes = {
  children: React.ReactNode;
  placeholder: string;
};
const InputLayout = ({ children, placeholder }: InputLayoutTypes) => {
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width="640px" alignItems="center">
        <Flex position="sticky" width="100%">
          <Header>
            <ChakraInput
              placeholder={placeholder}
              variant="filled"
            ></ChakraInput>
          </Header>
        </Flex>
        <Box
          width="100%"
          height="calc(100vh - 96px - 80px)"
          overflowY="auto"
          overflowX="hidden"
          backgroundColor="#F4F6F8"
          padding="0 15px"
        >
          {children}
        </Box>
        <Flex w="100%" justifyContent="center" position="sticky">
          <Footer></Footer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InputLayout;
