import type {
  GetNextPageParamFunction,
  GetPreviousPageParamFunction,
} from '@tanstack/react-query';

import type { PaginateQuery } from '../types';

type KeyParams = {
  [key: string]: any;
};

export const DEFAULT_LIMIT = 15;

export function getQueryKey<T extends KeyParams>(key: string, params?: T) {
  return [key, ...(params ? [params] : [])];
}

export function normalizePages<T>(pages?: PaginateQuery<T>[]): T[] {
  return pages
    ? pages.reduce((prev: T[], current) => [...prev, ...current.data], [])
    : [];
}

export function getUrlParameters(
  url: string | null,
): { [k: string]: string } | null {
  if (url === null) {
    return null;
  }
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    if (match[1] !== null) {
      //@ts-ignore
      params[match[1]] = match[2];
    }
  }
  return params;
}

export const getPreviousPageParam: GetNextPageParamFunction<
  PaginateQuery<unknown>
> = (page: any) => getUrlParameters(page.previous)?.offset ?? null;

export const getNextPageParam: GetPreviousPageParamFunction<
  PaginateQuery<unknown>
> = (page: any) => getUrlParameters(page.next)?.offset ?? null;
