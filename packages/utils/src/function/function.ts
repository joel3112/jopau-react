import _ from 'lodash';
import { TAny } from '../index';

export type TFunction = (...args: never[]) => TAny;
export type TFunctionVoid = (...args: never[]) => void;

export const range = (start: number, end?: number, step?: number): Array<number> => {
  return _.range(start, end, step);
};
