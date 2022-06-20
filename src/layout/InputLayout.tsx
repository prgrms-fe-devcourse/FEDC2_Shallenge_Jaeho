import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";

import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ChakraInput from "@base/ChakraInput";
import { Box, Flex } from "@chakra-ui/react";
import userAtom from "@store/user";
import searchInputAtom from "@store/searchInput";

const InputLayout = () => {
  const navigate = useNavigate();
  const [myUser] = useAtom(userAtom);
  const [searchInput, setSearchInput] = useAtom(searchInputAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?userName=${searchInput}`);
  };

  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width="640px" alignItems="center">
        <Flex position="sticky" width="100%" zIndex={3}>
          <Header>
            <form onSubmit={handleSubmit}>
              <ChakraInput
                placeholder={myUser ? myUser.fullName : ""}
                variant="filled"
                onChangeValue={setSearchInput}
              ></ChakraInput>
            </form>
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
        <Flex w="100%" justifyContent="center" position="sticky">
          <Footer user={myUser}></Footer>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InputLayout;
