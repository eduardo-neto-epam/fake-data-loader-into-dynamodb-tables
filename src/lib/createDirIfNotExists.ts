import {existsSync, mkdirSync} from 'fs';

/**
 * Function that checks if given directory exists and if not, it creates it.
 * Note: Option of recursive: true is to handle path nesting.
 * @param pathToDir string - path to directory, inclusive.
 */
export const createDirIfNotExists = (pathToDir: string) => {
  if (!existsSync(pathToDir)) {
    mkdirSync(pathToDir, {recursive: true});
  }
};
