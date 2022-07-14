/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useState } from "react";
import { Circle, Flex, Textarea } from "@chakra-ui/react";
import Icon from "@base/Icon";

interface Props {
  onValueChange?: (param: string) => void;
}

const CommentInput = ({ onValueChange }: Props) => {
  const [value, setValue] = useState("");

  const resize = (obj: HTMLTextAreaElement) => {
    obj.style.height = "1px";
    obj.style.height = 12 + obj.scrollHeight + "px";
  };

  const onChangeEvent = () => {
    onValueChange ? onValueChange(value) : undefined;
    setValue("");
  };

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
          name="commentContent"
          value={value}
          width="100%"
          overflow="visible"
          minHeight="38px"
          resize="none"
          border="none"
          outline="none"
          _focusVisible={{ boxShadow: "none" }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onChangeEvent();
            }
          }}
          onChange={(event) => {
            setValue(event.target.value);
            resize(event.target);
          }}
        ></Textarea>
        <Circle _hover={{ cursor: "pointer" }} onClick={onChangeEvent}>
          <Icon name="arrow-up-circle"></Icon>
        </Circle>
      </Flex>
    </>
  );
};

export default CommentInput;
