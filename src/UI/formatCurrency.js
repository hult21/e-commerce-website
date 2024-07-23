const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  });
  
  export default function formatCurrency(cents) {
    const dollars = cents / 100;
    return CURRENCY_FORMATTER.format(dollars);
  }