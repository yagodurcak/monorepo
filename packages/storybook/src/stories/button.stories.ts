import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@design-system/ui';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size" [disabled]="disabled">Button</ds-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
};

export const Outline: Story = {
  args: { variant: 'outline' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <ds-button variant="primary" size="sm">Primary SM</ds-button>
        <ds-button variant="primary" size="md">Primary MD</ds-button>
        <ds-button variant="primary" size="lg">Primary LG</ds-button>
        <ds-button variant="secondary" size="sm">Secondary SM</ds-button>
        <ds-button variant="secondary" size="md">Secondary MD</ds-button>
        <ds-button variant="secondary" size="lg">Secondary LG</ds-button>
        <ds-button variant="outline" size="sm">Outline SM</ds-button>
        <ds-button variant="outline" size="md">Outline MD</ds-button>
        <ds-button variant="outline" size="lg">Outline LG</ds-button>
        <ds-button variant="primary" [disabled]="true">Disabled</ds-button>
      </div>
    `,
  }),
};
