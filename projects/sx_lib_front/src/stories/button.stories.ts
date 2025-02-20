import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../lib/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'Button',
  argTypes: {
    type: {
      description: 'Tipo do botão',
      control: 'radio',
      options: ['button', 'submit', 'reset'],
      type: 'string',
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    variation: {
      description: 'Variação do botão',
      control: 'radio',
      options: ['raised', 'stroked', 'ghost'],
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'raised' },
      },
    },
    color: {
      description: 'Cor do botão',
      control: 'radio',
      options: ['primary', 'warn', 'cancel', 'secondary'],
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Tamanho do botão',
      control: 'radio',
      options: ['md', 'large', 'sm'],
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    isLoading: {
      description: 'Mostra ou não o feedback de "lendo..."',
      control: 'boolean',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'desabilita / habilita o botão',
      control: 'boolean',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isWithIcon: {
      description: 'Mostra ou não um ícone',
      control: 'boolean',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hasWidth: {
      control: 'text',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    hasPorcentageWidth: {
      description: 'Atribui um tamanho em porcentagem ao botão',
      control: 'text',
      type: 'string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'auto' },
      },
    },
    loaderColor: {
      description: 'Lê a cor que será atribuída ao botão',
      control: 'radio',
      options: ['primary', 'secondary'],
      type: 'string',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'primary' },
      },
    },
    iconLoaderSize: {
      description: 'Lê tamanho do icone que será atribuído ao botão',
      control: 'number',
      type: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '20' },
      },
    },
  },
  args: {
    type: 'button',
    variation: 'raised',
    color: 'primary',
    size: 'md',
    isLoading: false,
    disabled: false,
    isWithIcon: false,
    hasWidth: 'auto',
    hasPorcentageWidth: 'auto',
    loaderColor: 'primary',
    iconLoaderSize: 20
  },
  render: (args: any) => ({    
    template: `<sx-button
      [type]="'${args.type}'"
      [variation]="'${args.variation}'"
      [color]="'${args.color}'"
      [size]="'${args.size}'"
      [isLoading]="${args.isLoading}"
      [disabled]="${args.disabled}"
      [isWithIcon]="${args.isWithIcon}"
      [hasWidth]="'${args.hasWidth}'"
      [hasPorcentageWidth]="'${args.hasPorcentageWidth}'"
      [loaderColor]="'${args.loaderColor}'">
        Button
      </sx-button>`
  })
};
