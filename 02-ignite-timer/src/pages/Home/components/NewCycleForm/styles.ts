import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.5rem;
  width: 100%;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.125rem;
  font-weight: bold;
`;

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};

  font-weight: inherit;
  font-size: inherit;
  background: transparent;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutAmountInput = styled(BaseInput)`
  width: 4rem;
`;
