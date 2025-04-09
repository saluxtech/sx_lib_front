import type { Meta, StoryObj } from '@storybook/angular';

import { SpinnerComponent } from 'sx_lib_front';

const meta: Meta<SpinnerComponent> = {
  title: 'Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Primary: Story = {
  name: 'Spinner',
  argTypes: {
    mensagem: {
      description: 'Mensagem do spinner',
      control: 'text',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    mensagem: 'Carregando...',
  },
};
