import { transparentize } from "polished";
import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;

    input {
      width: 100%;
      padding: 0.8rem 1.2rem;
      border: 0;
      border-radius: ${theme.radii.small};
      background: ${transparentize(0.92, theme.colors.lightGrey)};
      color: ${theme.colors.label};

      ::placeholder {
        opacity: 10;
      }
    }
  `}
`;
