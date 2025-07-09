import { useCallback, useEffect, useState } from "react";

import { useRGetUsers } from "../../../repositories";

function useHandleSearching() {
  const [username, setUsername] = useState<string>("");
  const [searchedUsername, setSearchedUsername] = useState<string>("");

  const { data, isFetching, refetch, error, isError } = useRGetUsers({
    username: searchedUsername,
    enabled: false,
  });

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSearchedUsername(username);

      // prevent race condition
      setTimeout(() => {
        refetch();
      }, 100);
    },
    [username, refetch]
  );

  return {
    setUsername,
    handleSubmit,
    data,
    loading: isFetching,
    searchedUsername,
    username,
  };
}

export default useHandleSearching;
