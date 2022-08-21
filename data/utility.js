export function dateStr(date) {
  return (
    new Date(date).toLocaleDateString("en-US", {}) +
    " " +
    new Date(date).toLocaleTimeString("en-US", {})
  );
}

export function phoneValid(phone) {
  return true;
}

export function fixDate(date) {
  date = new Date(date);
  return new Date(
    Math.floor(date.getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30),
  );
}
