/**
 * Utility function to fill an array of given length, with the object returned by callback as items.
 * @param arr - Array of Generic type T
 * @param length - number
 * @param cb - Callback function called for every index of the array that returns object of type T
 */
export const fillArray: <T>(arr: T[], length: number, cb: () => T) => void = (
  arr,
  length,
  cb
) => {
  Array.from({length}).forEach(() => {
    arr.push(cb());
  });
};
