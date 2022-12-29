import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { motion } from "framer-motion";

export const AnimatedContainer = styled(motion.div)`
  ${({ theme }) => css`
    width: 100%;
    min-height: 12rem;
    height: auto;
    display: flex;
    flex-shrink: 0;

    > button:last-child {
      margin: 0 0 2.4rem 2.4rem;
      align-self: flex-end;
      background: ${transparentize(0.92, theme.colors.grey)};
      border-radius: 50%;
      max-width: 4rem;
      max-height: 4rem;
      width: 100%;
      height: 100%;
      padding: 0;

      svg {
        width: auto;
        height: 2.4rem;
      }
    }
  `}
`;

export const Navigation = styled.nav`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1.2rem;
`;

export const AnimatedCard = styled(motion.button)`
  ${({ theme }) => css`
    min-height: 12rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.grey};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    font-size: ${theme.fontSizes.default};
    padding: 0.5rem;
    /* background: ${theme.colors.grey}; */

    svg {
      stroke: ${theme.colors.background};
      stroke-width: 1.5;
      max-height: 2.4rem;
      height: 100%;
      width: auto;
    }

    :nth-child(2) {
      svg {
        stroke: none;
      }
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const ClassName = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    border-radius: ${theme.radii.default};
    color: ${theme.colors.label};
    background-color: ${theme.colors.background};
    padding: 1rem;
    text-transform: capitalize;
    font-size: ${theme.fontSizes.large};
  `};
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

export const ContentInformationCard = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(1.8rem, 1fr, 1fr, 1fr));
  grid-gap: 0.8rem;
  padding: 0.5rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border-radius: ${theme.radii.default};
  `}
`;

export const CardDetailsContent = styled.div``;

export const CardDetails = styled.span`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.label};
  `}
`;
