import { useAtom } from "jotai";
import { Outlet } from "react-router-dom";

import Header from "@layout/Header";
import Footer from "@layout/Footer";
import { Box, Flex, Heading } from "@chakra-ui/react";
import userAtom from "@store/user";

const TextLayout = () => {
  const [myUser] = useAtom(userAtom);
  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width="640px" alignItems="center">
        <Flex position="sticky" width="100%">
          <Header>
            <Heading size="xl" color="#ff7900">
              1
            </Heading>
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
          <Outlet />
        </Box>
        <Flex w="100%" justifyContent="center" position="sticky" zIndex={1}>
          <Footer user={myUser}></Footer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TextLayout;
