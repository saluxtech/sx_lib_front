import { type Meta, type StoryObj } from '@storybook/angular';
import { CarouselComponent, CarouselItem } from 'sx_lib_front';

const meta: Meta<CarouselComponent> = {
  title: 'Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CarouselComponent>;

const carouselItems: CarouselItem[] = [
  {
    uri: 'img/carousel/banner-default.jpg',
    title: 'Slide 1',
    description: 'Descrição do Slide 1',
  },
  {
    uri: 'img/carousel/banner-default.jpg',
    title: 'Slide 2',
    description: 'Descrição do Slide 2',
  },
  {
    uri: 'img/carousel/banner-default.jpg',
    title: 'Slide 3',
    description: 'Descrição do Slide 3',
  },
];

export const Primary: Story = {
  name: 'Primary',
  args: {
    carouselItems,
  },
  argTypes: {
    carouselItems: {
      control: {
        type: 'object',
      },
    },
  },
};
