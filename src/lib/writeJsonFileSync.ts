import {writeFileSync} from 'fs';
import {resolve} from 'path';
import {JSON_FOLDER} from '../constants';

/**
 * Function to write json data into a file in predefined folder.
 * @param data - string - json data to write in file
 * @param fileName - string - file name without extension
 */
export const writeJsonFileSync = (data: string, fileName: string) => {
  writeFileSync(resolve(JSON_FOLDER, `${fileName}.json`), data, 'utf8');
};
