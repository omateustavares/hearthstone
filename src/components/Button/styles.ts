import styled, { css } from "styled-components";

import { ButtonProps } from ".";

const variants = {
  secondary: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.yellow};

    :hover {
      background: ${({ theme }) => theme.colors.yellow};
      color: ${({ theme }) => theme.colors.grey900};
    }
  `,

  danger: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.error};

    :hover {
      background: ${({ theme }) => theme.colors.error};
      color: ${({ theme }) => theme.colors.grey900};
    }
  `,

  adding: css`
    background: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};

    :hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.grey900};
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.background};
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: ${theme.radii.small};
    color: ${color || theme.colors.yellow};
    transition: ${theme.transition.default};

    * {
      transition: ${theme.transition.default};
    }

    ${variant && variants[variant]};

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  `}
`;
