import type { Meta, StoryObj } from '@storybook/angular';

import { BasicCardComponent } from '../lib/basic-card/basic-card.component';

const meta: Meta<BasicCardComponent> = {
  title: 'Basic Card',
  component: BasicCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BasicCardComponent>;

export const Primary: Story = {
  name: 'Basic Card',
  argTypes: {
    colorVariation: {
      description: 'Variação de cor',
      control: 'radio',
      options: ['white', 'gray', 'blue', 'blue-notification'],
      type: 'string',
      defaultValue: 'white',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
    },
    padding: {
      description: 'Espaçamento interno',
      control: 'radio',
      options: ['0', 'sm', 'md', 'lg'],
      type: 'string',
      defaultValue: 'lg',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      },
    },
    margingBottom: {
      description: 'Margem inferior',
      control: 'radio',
      options: ['0', 'sm', 'md', 'lg', 'default'],
      type: 'string',
      defaultValue: 'default',
      table: {
        type: { summary: 'default' },
        defaultValue: { summary: 'lg' },
      },
    },
    width100: {
      description: 'Espaçamento completo',
      control: 'boolean',
      type: 'boolean',
      defaultValue: false,
      table: {
        type: { summary: 'default' },
        defaultValue: { summary: 'false' },
      },
    },
    basicCardWidth: {
      description: 'Largura do card',
      control: 'text',
      type: 'string',
      defaultValue: false,
    },
    basicCardHeight: {
      description: 'Altura do card',
      control: 'text',
      type: 'string',
      defaultValue: false,
    },
    paddingBottom: {
      description: 'Espaçamento interno inferior do card',
      control: 'boolean',
      type: 'boolean',
      defaultValue: true,
      table: {
        type: { summary: 'default' },
        defaultValue: { summary: 'true' },
      },
    },
    borderColor: {
      description: 'Cor da borda do card',
      control: 'text',
      type: 'string',
      defaultValue: false,
    },
  },
  args: {
    colorVariation: 'white',
    padding: 'lg',
    margingBottom: 'default',
    radius: 'md',
    width100: false,
    basicCardWidth: '',
    basicCardHeight: '',
    paddingBottom: true,
    borderColor: '',
  },

  render: (args: any) => ({    
    template: `
      <sx-basic-card
        [colorVariation]="'${args.colorVariation}'"
        [padding]="'${args.padding}'"
        [margingBottom]="'${args.margingBottom}'"
        [radius]="'${args.radius}'"
        [width100]="${args.width100}"
        [basicCardWidth]="'${args.basicCardWidth}'"
        [basicCardHeight]="'${args.basicCardHeight}'"
        [paddingBottom]="${args.paddingBottom}"
        [borderColor]="'${args.borderColor}'"
      >
        Basic Card
      </sx-basic-card>
    `
  })
};
