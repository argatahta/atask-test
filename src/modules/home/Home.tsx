import { Input, Button, chakra, Stack, Box } from "@chakra-ui/react";

import { useHandleSearching } from "./usecase";
import { Users } from "./components";

function Home() {
  const { handleSubmit, searchedUsername, username, setUsername, loading, data } =
    useHandleSearching();

  return (
    <Box p={4}>
      <chakra.form width="100%" onSubmit={handleSubmit}>
        <Stack>
          <Input width="100%" onChange={(e) => setUsername(e.target.value)} />
          <Button
            disabled={loading || !username}
            bg="#2196F3"
            _hover={{ opacity: 0.9 }}
            width="100%"
            type="submit"
          >
            Search
          </Button>
          <Users
            data={data?.items || []}
            username={searchedUsername}
            loading={loading}
          />
        </Stack>
      </chakra.form>
    </Box>
  );
}

export default Home;
