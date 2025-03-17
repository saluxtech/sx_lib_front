import { RouterModule, ActivatedRoute } from '@angular/router';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SideMenuComponent, SideMenuItem } from 'sx_lib_front';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

const meta: Meta<SideMenuComponent> = {
  title: 'SideMenu',
  component: SideMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterModule, CommonModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null,
              },
            },
          },
        },
      ],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SideMenuComponent>;

const menuItems: SideMenuItem[] = [
  {
    label: 'Atendimento e Pacientes',
    icon: 'fa-solid fa-user-injured',
    route: '/assistencial/pacientes',
  },
  {
    label: 'Faturamento Hospitalar',
    icon: 'fa-solid fa-file-invoice-dollar',
    route: '/assistencial/baa',
  },
  {
    label: 'Suprimentos Médicos',
    icon: 'fa-solid fa-warehouse',
    route: '/settings',
  },
  {
    label: 'Gestão Financeira',
    icon: 'fa-light fa-file-invoice',
    route: '/settings',
  },
  {
    label: 'Suporte e Apoio',
    icon: 'fa-light fa-handshake-angle',
    route: '/settings',
  },
  {
    label: 'Estratégia e Planejamento',
    icon: 'fa-light fa-chart-waterfall',
    route: '/settings',
  },
  {
    label: 'WEB',
    icon: 'fa-light fa-globe-pointer',
    route: '/settings',
  },
];

export const Primary: Story = {
  name: 'Primary',
  args: {
    menuItems,
  },
  argTypes: {
    menuItems: {
      control: {
        type: 'object',
      },
    },
  },
};