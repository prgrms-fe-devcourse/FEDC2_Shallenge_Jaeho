import { Box } from "@chakra-ui/react";
import TextLayout from "@layout/TextLayout";

export default {
  title: "Component/Layout/TextLayout",
  component: "Layout",
};

export const Default = () => {
  return (
    <TextLayout text="Shallange">
      <Box
        width="100%"
        height="96px"
        backgroundColor="#cccccc"
        margin="16px 0"
        borderRadius="5px"
      ></Box>
      <Box
        width="100%"
        height="96px"
        backgroundColor="#cccccc"
        margin="16px 0"
        borderRadius="5px"
      ></Box>
      <Box
        width="100%"
        height="96px"
        backgroundColor="#cccccc"
        margin="16px 0"
        borderRadius="5px"
      ></Box>
      <Box
        width="100%"
        height="96px"
        backgroundColor="#cccccc"
        margin="16px 0"
        borderRadius="5px"
      ></Box>
    </TextLayout>
  );
};
