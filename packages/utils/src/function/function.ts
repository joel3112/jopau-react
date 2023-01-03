import _ from 'lodash';
import { TAny } from '../index';

export type TFunction = (...args: never[]) => TAny;
export type TFunctionVoid = (...args: never[]) => void;

export const range = _.range;

export const debounce = _.debounce;

export const delay = _.delay;

export const noop = _.noop;

export const random = _.random;

export const throttle = _.throttle;
