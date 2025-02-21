import type { Meta, StoryObj } from '@storybook/angular';

import { AccordionComponent } from 'sx';

const meta: Meta<AccordionComponent> = {
  title: 'Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Primary: Story = {
  name: 'Accordion',
  args: {
    title: 'Header text',
    colorTitle: '#000', 
    subtitle: 'Subtitle text',
    colorSubtitle: '#000',
    titleB: '',
    colorTitleB: '',
    subtitleB: '',
    colorSubtitleB: '',
    pathIcon: '',
    pathFillIcon: '',
    viewBoxIcon: '',
    sizeTitle: 'normal',
  },
  render: (args: any) => ({    
    template: `
      <sx-accordion
        [title]="'${args.title}'"
        [subtitle]="'${args.subtitle}'"
        colorSubtitle="'${args.colorSubtitle}'"
      >
        <div class="col-md-7 col-sm-12">
          <p class="title">Lorem Ipsum</p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>

        <div class="col-md-5 col-sm-12">
          <p class="title">Lorem Ipsum</p>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
        </div>
      </sx-accordion>
    `
  })
};
