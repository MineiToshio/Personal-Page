import { Locale } from '@/types/i18n';

const formatDate = (date: Date, lang: Locale) => {
  const day = date.getDate().toString();
  const month = (date.getMonth() + 1).toString();
  const year = date.getFullYear().toString();

  const formattedDay = `${day.length === 1 ? '0' : ''}${day}`;
  const formattedMonth = `${month.length === 1 ? '0' : ''}${month}`;

  switch (lang) {
    case 'es':
      return `${formattedDay}/${formattedMonth}/${year}`;
    case 'en':
    default:
      return `${formattedMonth}/${formattedDay}/${year}`;
  }
};

export default formatDate;
