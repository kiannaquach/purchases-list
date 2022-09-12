export default function formatDate(date) {
  const MONTHS = [
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
    'December'
  ];

  const dateObj = new Date(date);
  const month = MONTHS[dateObj.getMonth()];

  return `${month} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}
