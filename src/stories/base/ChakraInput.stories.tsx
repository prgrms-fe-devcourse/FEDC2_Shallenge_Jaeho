import ChakraInput from "@base/ChakraInput";

export default {
  title: "Component/ChakraInput",
  component: ChakraInput,
};

export const Outline = () => {
  return (
    <ChakraInput
      placeholder="outline placeholder"
      variant="outline"
    ></ChakraInput>
  );
};

export const Filled = () => {
  return (
    <ChakraInput
      placeholder="filled placeholder"
      variant="filled"
    ></ChakraInput>
  );
};
