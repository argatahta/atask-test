import type { QueryFunction } from '@tanstack/react-query';

const BASE_URL = "https://api.github.com";

export const queryFn: QueryFunction<unknown, [string, Record<string, unknown>]> = async ({ queryKey }) => {
  const [endpoint, params] = queryKey;

  const url = new URL(`${BASE_URL}${endpoint}`);
  if (params && typeof params === 'object') {
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
};
