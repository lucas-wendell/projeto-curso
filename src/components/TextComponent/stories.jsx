import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Voluptas magnam aliquam perspiciatis?
    Unde, officiis! Nisi officiis cumque quas nostrum nulla error aliquid,
    veritatis nesciunt voluptate earum expedita nobis repellat itaque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
