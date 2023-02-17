import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink/>', () => {
  it('should render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo">
        Children
      </LogoLink>,
    );

    expect(
      screen.getByRole('heading', { name: 'Ola mundo' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ola mundo' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImage="image.jpg">
        Children
      </LogoLink>,
    );

    expect(screen.getByRole('img', { name: 'Ola mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Ola mundo" srcImage="image.jpg">
        Children
      </LogoLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
