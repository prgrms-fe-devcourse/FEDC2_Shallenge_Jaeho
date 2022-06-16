import InputLayout from "@layout/InputLayout";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
const dummyInput = "@김땡땡";
const dummyUser = [];

const SearchUserPage = () => {
  return (
    <InputLayout placeholder="@김땡땡">
      <Flex justifyContent={"center"} width="100%">
        {dummyUser.length === 0 ? (
          <Text fontSize="lg" paddingTop="80px">
            <span>{dummyInput}</span>으로 찾은 사용자가 없어요 😢
            <br />
            다른 이름으로 찾아보시는 건 어떠신가요?
          </Text>
        ) : (
          ""
        )}
      </Flex>
    </InputLayout>
  );
};

export default SearchUserPage;
