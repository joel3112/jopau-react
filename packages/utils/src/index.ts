import { TObject } from './object';
import { TArray } from './array';

export type TBasic = string | number | boolean | null | undefined;
export type TAny = TBasic | TObject<unknown> | TArray<unknown> | unknown;

export * from './array';
export * from './breakpoint';
export * from './collection';
export * from './date';
export * from './object';
export * from './string';
