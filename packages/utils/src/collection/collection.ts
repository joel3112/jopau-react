import * as _ from 'lodash';

export type Collection<T = unknown> = object & Record<string, T>;

export const getPropValue = <T = Collection, U = unknown>(
  collection: T,
  path: string,
  defaultValue?: U
): U => {
  return _.get(collection, path, defaultValue);
};

export const isEmpty = <T = Collection>(collection: T): boolean => {
  return !(collection && Object.keys(collection).length);
};

export const mapValuesBy = <T extends object = Collection, U = Collection>(
  collection: T,
  callback: (value: unknown) => unknown
): U => {
  return _.mapValues(collection, callback) as U;
};
