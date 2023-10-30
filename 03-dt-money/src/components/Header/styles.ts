import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${(props) => props.theme['gray-900']};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;
  padding: 0 1.5rem;

  margin-inline: auto;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  padding: 0 1.25rem;
  border-radius: 6px;
  font-weight: 700;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['white']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`;
