import type { Meta, StoryObj } from '@storybook/angular';

import { LabelComponent } from '../lib/label/label.component';

const meta: Meta<LabelComponent> = {
  title: 'Label',
  component: LabelComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Primary: Story = {
  name: 'Label',
  argTypes: {
    type: {
      description: 'Tipo do label',
      control: 'radio',
      options: ['content', 'title', 'body1-bold', 'body2-bold-pdf', 'body2'],
      type: 'string',
      defaultValue: 'content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'content' },
      },
    },
    color: {
      description: 'Cor do label',
      control: 'radio',
      options: ["default", "primary", "error", "green", "yellow", "red", "black", "gray", "white"],
      type: 'string',
      defaultValue: 'default',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    for: {
      description: 'Tamanho do label',
      control: 'text',
      type: 'string',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'Tamanho do label',
      control: 'radio',
      options: ["default", "small", "large"],
      type: 'string',
      defaultValue: 'default',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    isPDF: {
      description: 'Label no PDF',
      control: 'boolean',
      type: 'boolean',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    weight: {
      description: 'Largura do label',
      control: 'number',
      type: 'number',
      table: {
        type: { summary: 'number' },
      },
    },
  },
  args: {
    type: 'content',
    color: 'default',
    for: '',
    size: 'default',
    isPDF: false,
    weight: ''
  },
  render: (args: any) => ({    
    template: `
      <sx-label
        [type]="'${args.type}'"
        [color]="'${args.color}'"
        [size]="'${args.size}'"
        [for]="'${args.for}'"
        [isPDF]="${args.isPDF}"
        [weight]="${args.weight}">
        Label text
      </sx-label>
    `
  })
};
