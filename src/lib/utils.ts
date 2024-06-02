export const calculateBirthday = (birthdayTimestamp: string) => {

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  const dateStringParsing = new Date(birthdayTimestamp);
  return new Intl.DateTimeFormat('en-US', options).format(dateStringParsing);
};
