import { styled } from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  width: 100%;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    padding: 2rem 1rem;
    border-radius: 8px;
    background: ${(props) => props.theme['gray-700']};
  }
`;

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 0;
  width: 4rem;

  color: ${(props) => props.theme['green-500']};

  overflow: hidden;
`;
