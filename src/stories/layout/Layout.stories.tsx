import { Box } from "@chakra-ui/react";
import Layout from "@layout/Layout";

export default {
  title: "Component/Layout/Layout",
  component: "Layout",
};

export const WithInput = () => {
  return (
    <Layout type="input" text="@김땡땡">
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
    </Layout>
  );
};

export const WithText = () => {
  return (
    <Layout type="text" text="Shallange">
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
    </Layout>
  );
};
