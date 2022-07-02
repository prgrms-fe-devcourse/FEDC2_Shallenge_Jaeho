import { Center } from "@chakra-ui/react";

import Social from "@/base/Social";

type CommentButtonType = {
  count: number;
};

const CommentButton = ({ count }: CommentButtonType) => {
  return (
    <Center
      w="120px"
      h="72px"
      borderRadius="15px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      cursor="pointer"
      _hover={{ color: "#FF7900", fill: "#FF7900" }}
    >
      <Social type="comment" size="main" count={count} />
    </Center>
  );
};

export default CommentButton;
