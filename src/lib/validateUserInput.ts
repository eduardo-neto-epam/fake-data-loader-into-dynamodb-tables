import {isNumber} from '.';
import {TEST_RANGE_MAX, TEST_RANGE_MIN} from '../constants';

/**
 * Validates if input is a string with a valid integer and between test range.
 * Test range is to limit user input to reasonable and valid values.
 * @param x string
 * @returns number or throws error
 */
export const validateUserInput = (x: string) => {
  if (!isNumber(x)) {
    throw new Error('Please, a number... ');
  }
  const n = Number(x);
  if (n > TEST_RANGE_MAX || n < TEST_RANGE_MIN) {
    throw new Error(`Between ${TEST_RANGE_MIN} and ${TEST_RANGE_MAX} please`);
  }
  return n;
};
