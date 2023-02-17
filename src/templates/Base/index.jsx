import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        <h1>{children}</h1>
      </Styled.Container>
    </>
  );
};

Base.propTypes = {
  links: P.arrayOf(),
  logoData: P.string,
  footerHtml: P.string,
  children: P.node.isRequired,
};
