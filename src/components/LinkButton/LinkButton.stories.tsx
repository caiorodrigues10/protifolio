import { Meta, StoryObj } from "@storybook/react";
import { LinkButtonProps, LinkButton } from "./LinkButton";

export default {
  title: "Components/Button",
  component: LinkButton,
  args: { children: "Create account" },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<LinkButtonProps>;

export const Default: StoryObj<LinkButtonProps> = {};
