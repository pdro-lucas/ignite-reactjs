export const DateFormatter = (date: string) => {
  const dateFormatted = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(dateFormatted);
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
