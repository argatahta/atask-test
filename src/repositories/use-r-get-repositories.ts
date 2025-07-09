/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { queryFn } from "@/utils/react-query/query-fn";

export interface Repository {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
}

export function useRGetRepositories(
  options: Omit<UseQueryOptions<Repository[], any>, "queryKey"> & {
    username: string;
  }
) {
  const { username, ...resOptions } = options;

  return useQuery<Repository[], any>({
    queryKey: [`/users/${username}/repos`],
    queryFn: queryFn as any,
    ...resOptions,
  });
}
