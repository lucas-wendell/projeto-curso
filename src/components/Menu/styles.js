import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    position: fixed;
    transition: all 300ms ease-in-out;
    background-color: ${theme.colors.white};
    border-bottom: ${theme.colors.mediumGray};

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      opacity: 0;
      height: 100vh;
      visibility: hidden;
      ${visible && menuVisible(theme)}

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
        margin: 0;
      }

      & ${Heading} {
        display: flex;
        justify-content: center;
        padding-bottom: ${theme.spacings.large};
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding-bottom: ${theme.spacings.xxlarge};
    }
  `}
`;

export const Button = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 6;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`;
