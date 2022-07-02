import ChakraHeading from "@/base/ChakraHeading";

export default {
  title: "Component/ChakraHeading",
  component: ChakraHeading,
  argTypes: {
    size: { defaultValue: "md", control: "text" },
    align: { defaultValue: "center", control: "text" },
    color: { control: "color" },
  },
};

export const Default = (args: any) => {
  return <ChakraHeading {...args}>Text</ChakraHeading>;
};
