import { Meta, StoryObj } from '@storybook/angular';
// Asegurate de que el nombre de la clase coincida con el que le puso Mauri en su .ts
import { ButtonComponent } from './button.component'; 

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primario: Story = {
  args: {
    // Acá le pasamos las propiedades que Mauri haya definido en su @Input()
  },
  render: (args) => ({
    props: args,
    template: `<e-sidif-button>Botón de Prueba</e-sidif-button>`, // Ajustá el selector si Mauri le puso otro
  }),
};