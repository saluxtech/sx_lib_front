import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { provideNgxMask } from 'ngx-mask';
import { InputComponent } from 'sx_lib_front';

const meta: Meta<InputComponent> = {
  title: 'Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [provideNgxMask()],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label do input' },
    type: { 
      control: 'select', 
      options: [
        'text', 'password', 'email', 'number', 'tel', 'url', 'search', 'color', 
        'date', 'datetime-local', 'month', 'week', 'time', 'file', 'hidden'
      ], 
      description: 'Tipo do input' 
    },
    placeholder: { control: 'text', description: 'Placeholder do input' },
    mask: { control: 'text', description: 'Máscara do input' },
    dropSpecialCharacters: { control: 'boolean', description: 'Remove caracteres especiais' },
    theme: { control: 'select', options: ['light', 'dark', 'light-2'], description: 'Tema do input' },
    prefix: { control: 'boolean', description: 'Prefixo do input' },
    suffix: { control: 'boolean', description: 'Sufixo do input' },
    isReadonly: { control: 'boolean', description: 'Input somente leitura' },
    maxLength: { control: 'number', description: 'Comprimento máximo do input' },
    isLoading: { control: 'boolean', description: 'Estado de carregamento' },
    prefixIcon: { control: 'boolean', description: 'Ícone de prefixo' },
    formControlName: { control: 'text', description: 'Nome do controle de formulário' },
    height: { control: 'select', options: ['sm', 'lg'], description: 'Altura do input' },
    errorMessage: { control: 'text', description: 'Mensagem de erro' },
    marginField: { control: 'number', description: 'Margem do campo' },
    showAsterisco: { control: 'boolean', description: 'Mostrar asterisco' },
    validation: { control: 'boolean', description: 'Validação do input' },
    variationLabel: { 
      control: 'select', 
      options: [
        'body1', 'body1-bold', 'body2', 'body2-bold-pdf', 'caption', 
        'h3-title', 'h4-title', 'label-input', 'caption-bold'
      ], 
      description: 'Variação do label' 
    },
    limitWidth: { control: 'boolean', description: 'Limitar largura' },
    textColor: { control: 'text', description: 'Cor do texto' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  name: 'Input',
  args: {
    label: 'Nome',
    type: 'text',
    placeholder: 'Digite seu nome',
    mask: null,
    dropSpecialCharacters: true,
    theme: 'dark',
    prefix: false,
    suffix: false,
    isReadonly: false,
    maxLength: 9999,
    isLoading: false,
    prefixIcon: false,
    formControlName: 'defaultFormControlName',
    height: 'sm',
    errorMessage: 'Campo obrigatório',
    marginField: 0,
    showAsterisco: true,
    validation: true,
    variationLabel: 'label-input',
    limitWidth: false,
    textColor: '',
  },
  render: (args: any) => ({
    props: args,
    template: `
      <form [formGroup]="form">
        <div style="max-width: 50%;">
          <sx-input
            [label]="label"
            [type]="type"
            [placeholder]="placeholder"
            [mask]="mask"
            [dropSpecialCharacters]="dropSpecialCharacters"
            [theme]="theme"
            [prefix]="prefix"
            [suffix]="suffix"
            [isReadonly]="isReadonly"
            [maxLength]="maxLength"
            [isLoading]="isLoading"
            [prefixIcon]="prefixIcon"
            [formControlName]="formControlName"
            [height]="height"
            [errorMessage]="errorMessage"
            [marginField]="marginField"
            [showAsterisco]="showAsterisco"
            [validation]="validation"
            [variationLabel]="variationLabel"
            [limitWidth]="limitWidth"
            [textColor]="textColor"
            [isCalendar]="isCalendar"
          ></sx-input>
        </div>
      </form>
    `,
  }),
};