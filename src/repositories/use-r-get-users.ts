/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

import { queryFn } from "../utils/react-query/query-fn";

export interface UsersResponse {
  total_count: number;
  items: {
    login: string;
  }[];
}

export function useRGetUsers(
  options: Omit<UseQueryOptions<UsersResponse, any>, "queryKey"> & {
    username: string;
  }
) {
  const { username, ...resOptions } = options;

  return useQuery<UsersResponse, any>({
    queryKey: ["/search/users", { q: username, per_page: 5 }],
    queryFn: queryFn as any,
    ...resOptions,
  });
}
