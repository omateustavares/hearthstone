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
    margin-bottom: 2rem;
    font-size: ${theme.fontSizes.large};
    text-align: center;
    color: ${theme.colors.yellow};
  `}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  flex-direction: row;

  > div {
    justify-content: center;

    @media (max-width: 375px) {
      margin-bottom: 1rem;
    }
  }

  label {
    width: 100%;
    justify-content: space-around;
    margin-right: 1rem;
  }

  input {
    margin-right: 1rem;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const WithoutCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    align-items: center;

    h3 {
      margin-bottom: 2rem;
      font-size: ${theme.fontSizes.large};
      text-align: center;
      color: ${theme.colors.yellow};
    }
  `}
`;

export const DecksContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 2rem;
  padding: 1rem;
  align-items: flex-start;

  ${({ theme }) => css`
    background: ${`linear-gradient(4deg, ${theme.colors.yellow} 0%, ${theme.colors.grey900} 100%)`};
  `}/* > div {
    max-width: 4rem;
  } */
`;

export const TextDecks = styled.p`
  width: 100%;
  min-height: 2rem;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    text-align: center;
    color: ${theme.colors.label};
  `}
`;
