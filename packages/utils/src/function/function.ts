import * as lodash from 'lodash';
import { TAny } from '../index';

export type TFunction = (...args: never[]) => TAny;
export type TFunctionVoid = (...args: never[]) => void;

export const { debounce, delay, noop, random, range, throttle } = lodash;
