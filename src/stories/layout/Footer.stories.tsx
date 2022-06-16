import Footer from "@layout/Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
  argTypes: {
    width: {
      defaultValue: 640,
      control: { type: "range", min: 360, max: 1080 },
    },
    height: { defaultValue: 96, control: { type: "range", min: 60, max: 180 } },
  },
};

export const Default = (args: any) => {
  return <Footer {...args} />;
};
