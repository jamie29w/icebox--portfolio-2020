const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const prettifyDate = dateObj => {
  let retDate = '';
  retDate += months[dateObj.getMonth()] + ' ';

  retDate += dateObj.getDate();

  return retDate;
};
