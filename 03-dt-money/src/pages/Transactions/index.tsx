import { Header } from '@/components/Header';
import { Summary } from '@/components/Summary';
import { TransactionsContext } from '@/contexts/TransactionsContext';
import { useContext } from 'react';
import { SearchForm } from './components/SearchForm';
import * as S from './styles';
import { DateFormatter, formatCurrency } from '@/utils/formatter';

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <S.PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {formatCurrency(transaction.price)}
                    </S.PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{DateFormatter(transaction.createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
