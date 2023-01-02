import styled, { css } from "styled-components";
import { lighten } from "polished";
import { motion } from "framer-motion";
import Button from "../../components/Button";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.2rem;
  display: flex;
`;

export const AnimatedContainer = styled(motion.main)`
  ${({ theme }) => css`
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
    background: ${theme.colors.grey700};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};

    @media (max-width: 670px) {
      height: 100%;
    }

    h1 svg {
      width: 12rem !important;
      height: auto !important;
    }

    h2 {
      font-size: ${theme.fontSizes.large};
      text-align: center;
      color: ${theme.colors.label};
      margin-bottom: 3rem;
    }
  `}
`;

export const Form = styled.form`
  div {
    display: grid;
    flex-direction: column;
    width: 100%;
    grid-template-columns: 30ch 30ch;
    grid-gap: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 670px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const SignInButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1.2rem;
    color: ${theme.colors.label};
    background: ${`linear-gradient(4deg, ${theme.colors.grey700} 0%, ${theme.colors.grey900} 100%)`};
    transition: 300ms ease-in-out;

    :not(:disabled):before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: -100;
      background: ${theme.colors.primary};
      transition: opacity 0.45s;
      pointer-events: none;
    }

    /* :hover:not(:disabled) {
      background: ${`linear-gradient(90deg, ${lighten(
      0.04,
      theme.colors.secondary
    )} 0%, ${lighten(0.04, theme.colors.primary)} 100%)`};

      :before {
        opacity: 1;
      }
    } */

    :active:before {
      opacity: 0;
    }
  `}
`;

export const ContentButton = styled.main`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
