import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 2.4rem;
  width: 100%;

  @media (max-width: 670px) {
    margin: 2.4rem 0 0;
  }
`;

export const FormFilter = styled.div`
  flex-direction: row;
  display: flex;

  @media (max-width: 670px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const RadioButtonGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    flex-direction: row;
  `}

  input {
    margin-right: 1rem;
  }
`;
