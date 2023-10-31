import * as Dialog from '@radix-ui/react-dialog';
import * as S from './styles';
import Logo from '@/assets/logo.svg';
import { NewTransactionsModal } from '@/components/NewTransactionsModal';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={Logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
