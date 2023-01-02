import styled, { css } from "styled-components";

interface PropsError {
  isInvalid: boolean;
}

export const Container = styled.main``;

export const Select = styled.select<PropsError>`
  ${({ theme }) => css`
    -webkit-appearance: none;
    display: flex;
    width: 100%;
    border: 2;
    padding: 1rem 1.2rem;
    border-radius: ${theme.radii.small};
    background: ${theme.colors.grey900};
    color: ${theme.colors.greyLowerOpacity};
    border-color: ${theme.colors.grey900};
    font-size: ${theme.fontSizes.default};
  `}
  ${(props) =>
    props.isInvalid &&
    css`
      color: ${props.theme.colors.error};
      border-color: ${props.theme.colors.error};
    `}
`;

export const Option = styled.option``;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.fontSizes.default};
  `}
`;
