import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["text", "contained", "outlined"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const Outlined = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Large",
    variant: "outlined",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Small",
    variant: "outlined",
  },
};
