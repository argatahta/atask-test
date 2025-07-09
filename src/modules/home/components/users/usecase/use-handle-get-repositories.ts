import { useEffect } from "react";

import type { RepositoriesProps } from "../types";

import { useRGetRepositories } from "../../../../../repositories";

function useHandleGetRepositories(options: RepositoriesProps) {
  const { username, isExpanded } = options;

  const {
    data: repositories,
    isFetching,
    error,
    isError,
    refetch,
  } = useRGetRepositories({
    username,
    enabled: false,
  });

  useEffect(() => {
    if (isExpanded) {
      refetch();
    }
  }, [isExpanded, refetch]);

  useEffect(() => {
    if (isError) {
      if (error instanceof Error) {
        if (error.message.includes("403")) {
          alert(
            "You have exceeded the rate limit for GitHub API requests. Please try again later."
          );
          return;
        }
        alert(error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  }, [isError, error]);

  return {
    loading: isFetching,
    repositories,
  };
}

export default useHandleGetRepositories;
