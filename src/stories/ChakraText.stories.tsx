import ChakraText from "@base/ChakraText";

export default {
  title: "Component/ChakraText",
  component: ChakraText,
  argTypes: {
    size: { defaultValue: "md", control: "text" },
    align: { defaultValue: "center", control: "text" },
  },
};

export const Default = (args: any) => {
  return <ChakraText {...args}>Text</ChakraText>;
};
