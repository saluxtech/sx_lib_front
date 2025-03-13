import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LoaderComponent, LoaderService } from 'sx_lib_front';

const meta: Meta<LoaderComponent> = {
  title: 'Loader',
  component: LoaderComponent,
  decorators: [
    moduleMetadata({
      providers: [LoaderService],
    }),
  ],
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
    backDrop: {
      description: 'Exibir backdrop',
      control: 'boolean',
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    color: 'primary',
    text: '',
    size: 20,
    backDrop: true,
  },
  render: (args: any) => {
    const loaderService = new LoaderService();
    loaderService.showLoader();
    return {
      template: `
      <div [style.width.px]="200" [style.height.px]="200">
        <sx-loader [color]="'${args.color}'" [text]="'${args.text}'" [size]="'${args.size}'" [backDrop]="${args.backDrop}"></sx-loader>
      </div>
      `,
      props: {
        loaderService,
      },
    };
  },
};
