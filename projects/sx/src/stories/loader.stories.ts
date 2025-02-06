import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from '../lib/loader/loader.component';

const meta: Meta<LoaderComponent> = {
  title: 'Loader',
  component: LoaderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoaderComponent>;

export const Primary: Story = {
  name: 'Loader',
  argTypes: {
    color: {
      description: 'Cor do loader',
      control: 'radio',
      options: ['primary', 'secondary', 'support'],
      type: 'string',
      defaultValue: 'primary',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    text: {
      description: 'Texto do loader',
      control: 'text',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    size: {
      description: 'Tamanho do loader',
      control: 'number',
      type: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
  },
  args: {
    color: 'primary',
    text: '',
    size: 20,
  },
  render: (args: any) => ({    
    template: `<sx-loader [color]="'${args.color}'" [text]="'${args.text}'" [size]="'${args.size}'"></sx-loader>`
  })
};
