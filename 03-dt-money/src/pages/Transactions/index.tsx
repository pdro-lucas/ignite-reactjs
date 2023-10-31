import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import * as S from './styles';
import { SearchForm } from './components/SearchForm';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <S.PriceHighlight variant="income">
                  R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>30/10/2023</td>
            </tr>
            <tr>
              <td width="50%">hamburger</td>
              <td>
                <S.PriceHighlight variant="outcome">
                  - R$ 59,00
                </S.PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>30/10/2023</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
