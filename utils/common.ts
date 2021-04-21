export const getIsoCurrentDateTime = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const hour = ('0' + now.getHours()).slice(-2);
  const minute = ('0' + now.getMinutes()).slice(-2);
  return `${year}-${month}-${day}T${hour}:${minute}`;
};

export const capitaliseString = (str: string): string => {
  const first = str[0];
  const rest = str.slice(1);
  return first.toUpperCase().concat(rest.toLowerCase());
};
