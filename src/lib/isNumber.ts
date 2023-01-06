/**
 * Checks if user input in cli is a string with a valid integer.
 * @param s string - user input.
 * @returns boolean - true if it is a valid integer.
 */
export const isNumber = (s: string) => {
  for (let i = 0; i < s.length; i++) if (s[i] < '0' || s[i] > '9') return false;

  return true;
};
