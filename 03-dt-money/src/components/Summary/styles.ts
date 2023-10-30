import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;

  margin-inline: auto;
`;

interface SummaryCardProps {
  variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 2rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-700']};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;

    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`;
