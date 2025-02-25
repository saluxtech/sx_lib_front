import { StoryObj, Meta } from '@storybook/angular';
import { CheckboxComponent } from 'sx_lib_front';

const meta: Meta<CheckboxComponent> = {
  title: 'CheckBox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Primary: Story = {
  name: 'CheckBox',
  args: {
    label: 'Checkbox',
    disabled: false,
  },
  argTypes: {
    label: {
      description: 'Texto do checkbox',
      control: 'text',
      type: 'string',
    },
    disabled: {
      description: 'Desabilita o checkbox',
      control: 'boolean',
      type: 'boolean',
    }
  },
};
