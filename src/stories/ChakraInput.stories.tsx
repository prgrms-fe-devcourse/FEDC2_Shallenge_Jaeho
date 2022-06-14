import ChakraInput from "@base/ChakraInput";

export default {
  title: "Component/ChakraInput",
  component: ChakraInput,
  argTypes: {
    text: { defaultValue: "placeholder부분입니다", control: "text" },
    size: { defaultValue: "lg", control: "text" },
    width: {
      defaultValue: 400,
      control: { type: "range", min: 100, max: 640 },
    },
    type: {
      defaultValue: "text",
      control: "text",
    },
  },
};

export const Default = (args: any) => {
  return <ChakraInput {...args}>Text</ChakraInput>;
};
