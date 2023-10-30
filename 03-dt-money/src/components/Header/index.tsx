import * as S from './styles';
import Logo from '@/assets/logo.svg';

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={Logo} alt="" />
        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
