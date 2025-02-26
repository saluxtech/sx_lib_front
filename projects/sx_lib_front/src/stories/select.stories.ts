import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { OptionModel, SelectComponent } from 'sx_lib_front';

const meta: Meta<SelectComponent> = {
  title: 'Select',
  component: SelectComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<SelectComponent>;

const optionsTiposEnderecos: OptionModel[] = [
  { label: 'Residencial', value: 'residencial' },
  { label: 'Comercial', value: 'comercial' },
  { label: 'Outro', value: 'outro' },
];

export const Primary: Story = {
  args: {
    options: optionsTiposEnderecos,
    label: 'Select',
  },
  render: (args: any) => {
    const formGroup = new FormGroup({
      selectControl: new FormControl(''),
    });

    return {
      props: {
        ...args,
        formGroup,
      },
      template: `
        <div style="max-width: 70%; height: 300px;">
          <form [formGroup]="formGroup">
            <sx-select
              [label]="label"
              [options]="options"
              formControlName="selectControl"
            ></sx-select>
          </form>
        </div>
      `,
    };
  },
};
