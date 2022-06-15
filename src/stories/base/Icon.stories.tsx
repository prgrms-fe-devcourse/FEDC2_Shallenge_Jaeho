import Icon from "@base/Icon";

export default {
  title: "Component/Icon",
  component: Icon,
  argTypes: {
    name: { defaultValue: "home", control: "text" },
    size: { defaultValue: 38, control: { type: "range", min: 16, max: 80 } },
    color: { defaultValue: "#000000", control: "color" },
  },
};

export const Default = (args: any) => {
  return <Icon {...args} />;
};
