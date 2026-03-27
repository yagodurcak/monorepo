import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '@design-system/ui';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['fill', 'outline', 'text'],
      description: 'Estilo visual del botón',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'outline'],
      description: 'Color semántico del botón',
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado',
    },
  },
  args: {
    variant: 'fill',
    color: 'primary',
    size: 'lg',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Large button</ds-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// ─── Fill ───────────────────────────────────────────────────────────────
export const FillPrimaryLarge: Story = {
  name: 'Fill / Primary / Large',
  args: { variant: 'fill', color: 'primary', size: 'lg' },
};

export const FillPrimarySmall: Story = {
  name: 'Fill / Primary / Small',
  args: { variant: 'fill', color: 'primary', size: 'sm' },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled">Small button</ds-button>`,
  }),
};

export const FillSecondary: Story = {
  name: 'Fill / Secondary',
  args: { variant: 'fill', color: 'secondary', size: 'lg' },
};

export const FillSuccess: Story = {
  name: 'Fill / Success',
  args: { variant: 'fill', color: 'success', size: 'lg' },
};

export const FillDanger: Story = {
  name: 'Fill / Danger',
  args: { variant: 'fill', color: 'danger', size: 'lg' },
};

export const FillWarning: Story = {
  name: 'Fill / Warning',
  args: { variant: 'fill', color: 'warning', size: 'lg' },
};

export const FillDisabled: Story = {
  name: 'Fill / Disabled',
  args: { variant: 'fill', color: 'primary', size: 'lg', disabled: true },
};

// ─── Outline ─────────────────────────────────────────────────────────
export const OutlinePrimary: Story = {
  name: 'Outline / Primary',
  args: { variant: 'outline', color: 'primary', size: 'lg' },
};

export const OutlineOutline: Story = {
  name: 'Outline / Outline',
  args: { variant: 'outline', color: 'outline', size: 'lg' },
};

export const OutlineDisabled: Story = {
  name: 'Outline / Disabled',
  args: { variant: 'outline', color: 'primary', size: 'lg', disabled: true },
};

// ─── Text/Link ────────────────────────────────────────────────────────
export const TextLink: Story = {
  name: 'Text / Link',
  args: { variant: 'text', color: 'primary', size: 'lg' },
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
