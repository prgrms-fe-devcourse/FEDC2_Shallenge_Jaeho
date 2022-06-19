/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useState } from "react";
import { Circle, Flex, Textarea } from "@chakra-ui/react";
import Icon from "@base/Icon";

function resize(obj: HTMLTextAreaElement) {
  obj.style.height = "1px";
  obj.style.height = 12 + obj.scrollHeight + "px";
}

const CommentInput = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Flex
        alignItems="flex-end"
        border="1px solid #D9D9D9"
        padding="10px"
        borderTopRadius="5px"
        bg="#FFFFFF"
      >
        <Textarea
          value={value}
          width="100%"
          overflow="visible"
          minHeight="38px"
          resize="none"
          border="none"
          outline="none"
          _focusVisible={{ boxShadow: "none" }}
          onChange={(event) => {
            setValue(event.target.value);
            resize(event.target);
          }}
        ></Textarea>
        <Circle _hover={{ cursor: "pointer" }}>
          <Icon name="arrow-up-circle"></Icon>
        </Circle>
      </Flex>
    </>
  );
};

export default CommentInput;
