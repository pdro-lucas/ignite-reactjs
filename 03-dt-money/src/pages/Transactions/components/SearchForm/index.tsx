import { TransactionsContext } from '@/contexts/TransactionsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import { z } from 'zod';
import * as S from './styles';

const searchFormSchema = z.object({
  query: z.string().min(1),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (ctx) => ctx.fetchTransactions,
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInput) {
    if (!fetchTransactions) {
      return;
    }

    await fetchTransactions(data.query);
  }

  return (
    <S.SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}
