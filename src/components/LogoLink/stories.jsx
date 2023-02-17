import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImage:
      'https://i.fbcd.co/products/resized/resized-750-500/35fa221b9125551fc13446133b8d980337655e15f27b10dfb205db407ab13975.jpg',
    link: 'https://google.com.br',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImage: '',
};
