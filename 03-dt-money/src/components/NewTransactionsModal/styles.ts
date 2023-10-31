import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;

  width: 100vw;
  height: 100vh;
  inset: 0;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 36rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 0;

      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border-radius: 6px;
      border: 0;
      font-weight: 700;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme['white']};

      cursor: pointer;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }

      &:disabled {
        opacity: 0.6;

        cursor: not-allowed;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  background-color: transparent;
  color: ${(props) => props.theme['gray-500']};
  border: none;

  cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  gap: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};
  border: none;

  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    color: ${(props) => props.theme['white']};

    svg {
      color: ${(props) => props.theme['white']};
    }

    &[data-state='checked']:hover {
      background: ${(props) =>
        props.variant === 'income'
          ? props.theme['green-700']
          : props.theme['red-700']};
      transition: background-color 0.2s;
    }
  }
`;
