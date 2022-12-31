import { transparentize } from "polished";
import styled, { css } from "styled-components";

interface PropsError {
  isInvalid: boolean;
}

export const Content = styled.main``;

export const Container = styled.main<PropsError>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid;

  ${({ theme }) => css`
    padding: 0.8rem 1.2rem;
    border-radius: ${theme.radii.small};
    background: ${theme.colors.grey900};
    color: ${theme.colors.greyLowerOpacity};
    border-color: ${theme.colors.grey900};

    ::placeholder {
      opacity: 10;
    }

    input {
      font-size: ${theme.fontSizes.default};
      flex: 1;
      background: transparent;
      border: 0;
      color: #f4ede8;
      &::placeholder {
        color: #666360;
      }
    }
  `}

  ${(props) =>
    props.isInvalid &&
    css`
      color: ${props.theme.colors.error};
      border-color: ${props.theme.colors.error};
    `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.fontSizes.default};
  `}
`;
