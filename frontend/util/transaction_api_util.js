export const createTransaction = (transaction) => {
  return $.ajax({
    method: 'POST',
    url: `/api/transactions`,
    data: {transaction}
  });
};
