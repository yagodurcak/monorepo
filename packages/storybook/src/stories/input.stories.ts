import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@design-system/ui';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when the input is empty',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input is in an error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the input when error is true',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the input',
    },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    value: '',
    disabled: false,
    error: false,
    errorMessage: '',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <ds-input
        [label]="label"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [error]="error"
        [errorMessage]="errorMessage"
        [size]="size"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Full name',
    placeholder: 'John Doe',
  },
};

export const Small: Story = {
  args: { size: 'sm', label: 'Small input' },
};

export const Large: Story = {
  args: { size: 'lg', label: 'Large input' },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled field',
    value: 'Cannot be edited',
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email address',
    value: 'not-an-email',
    error: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <ds-input label="Small" placeholder="Small input" size="sm" />
        <ds-input label="Medium" placeholder="Medium input" size="md" />
        <ds-input label="Large" placeholder="Large input" size="lg" />
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        <ds-input label="Default" placeholder="Type something..." />
        <ds-input label="With value" value="Filled in value" />
        <ds-input label="Disabled" value="Disabled input" [disabled]="true" />
        <ds-input
          label="Error state"
          value="invalid@"
          [error]="true"
          errorMessage="Enter a valid email"
        />
      </div>
    `,
  }),
};
