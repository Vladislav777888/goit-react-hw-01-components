export const getFormatNumber = num => {
  return new Intl.NumberFormat('en-US').format(num);
};
