import { StoryObj, Meta, applicationConfig } from '@storybook/angular';
import { TabGroupComponent, IconeModel, Tab } from 'sx_lib_front';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<TabGroupComponent> = {
  title: 'TabGroup',
  component: TabGroupComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TabGroupComponent>;

const clockIcon: IconeModel = {
  iconeSize: '24',
  path_d:
    'M13.0312 11.9219L15.3086 13.6836C15.7812 14.0273 15.8672 14.6719 15.5234 15.1445C15.3086 15.4023 15.0078 15.5312 14.707 15.5312C14.4922 15.5312 14.2773 15.4883 14.1055 15.3594L11.3555 13.2969C11.0977 13.082 10.9688 12.7812 10.9688 12.4375V7.28125C10.9688 6.72266 11.3984 6.25 12 6.25C12.5586 6.25 13.0312 6.72266 13.0312 7.28125V11.9219ZM11.957 0.75C18.0586 0.75 22.9141 5.69141 22.9141 11.75C22.9141 17.8516 18.0156 22.75 11.957 22.75C5.85547 22.75 0.957031 17.8516 0.957031 11.75C0.957031 5.69141 5.85547 0.75 11.957 0.75ZM12 20.6875C16.8984 20.6875 20.9375 16.6914 20.9375 11.75C20.9375 6.85156 16.8984 2.8125 12 2.8125C7.05859 2.8125 3.0625 6.85156 3.0625 11.75C3.0625 16.6914 7.05859 20.6875 12 20.6875Z',
  path_fill: '#50688C',
};

const checkIcon: IconeModel = {
  iconeSize: '24',
  path_d:
    'M20.625 2.29297L8.9375 13.9805C8.76562 14.1953 8.50781 14.2812 8.25 14.2812C7.94922 14.2812 7.69141 14.1953 7.51953 13.9805L1.33203 7.79297C0.902344 7.40625 0.902344 6.76172 1.33203 6.375C1.71875 5.94531 2.36328 5.94531 2.75 6.375L8.25 11.832L19.207 0.875C19.5938 0.445312 20.2383 0.445312 20.625 0.875C21.0547 1.26172 21.0547 1.90625 20.625 2.29297Z',
  path_fill: '#50688C',
  viewBox: '0 0 24 15',
};

const tabs = [
  {
    label: 'Aprazamento',
    icone: clockIcon,
  },
  {
    label: 'Checagem',
    icone: checkIcon,
  },
];

export const Primary: Story = {
  name: 'TabGroup',
  args: {
    tabs,
  },
  argTypes: {
    tabs: {
      description: 'Array com as refencias dos componentes de cadas tab',
    },
    changeIndex: {
      action: 'changeIndex',
      description: 'Evento emitido quando o índice da aba é alterado',
      table: {
        type: { summary: 'EventEmitter<number>' },
      },
    },
  },
};
