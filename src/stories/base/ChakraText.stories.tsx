import ChakraText from "@/base/ChakraText";

export default {
  title: "Component/ChakraText",
  component: ChakraText,
};

export const LgText = () => {
  return <ChakraText size="lg">lg-Text</ChakraText>;
};

export const MdText = () => {
  return <ChakraText size="md">md-Text</ChakraText>;
};
