import type { Meta, StoryObj } from '@storybook/angular';

import { AssinaturaComponent } from 'sx';

const meta: Meta<AssinaturaComponent> = {
  title: 'Assinatura',
  component: AssinaturaComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AssinaturaComponent>;

export const Primary: Story = {
  name: 'Assinatura',
  args: {
    dadosProfissionalLogado: {
      Nome: 'Fulano de Tal',
      Conselho: 'Conselheiro',
      Cpf: '123.123.123-05',
      Crm: '78548759582',
      Funcao: 'Medico',
    },
    logoHospital: 'https://cdn-icons-png.flaticon.com/512/1728/1728914.png'
  },
  render: (args: any) => ({    
    props: args,
    template: `<sx-assinatura
      [dadosProfissionalLogado]="dadosProfissionalLogado"
      [logoHospital]="logoHospital">
    </sx-assinatura>`,
  })
}
