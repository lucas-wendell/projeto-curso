import { Base } from '.';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: 'Base',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
