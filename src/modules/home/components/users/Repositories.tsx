import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

import type { RepositoriesProps } from "./types";
import { useHandleGetRepositories } from "./usecase";

const Repositories = (props: RepositoriesProps) => {
  const { username, isExpanded } = props;

  const { loading, repositories } = useHandleGetRepositories({ username, isExpanded });

  if (loading) {
    return <Box p={4}>Loading...</Box>;
  }

  if (!repositories || repositories.length === 0) {
    return <Box p={4}>No repositories found</Box>;
  }

  return (
    <>
      {repositories.map((repo) => (
        <Box
          key={repo.id}
          mb={4}
          p={4}
          borderRadius="md"
          bg="gray.100"
          boxShadow="sm"
        >
          <Flex align="center" justify="space-between" mb={2}>
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                {repo.name}
              </Text>
            </Box>
            <Flex align="center" gap={1} minW="48px" justify="flex-end">
              <Text fontWeight="bold" fontSize="md">
                {repo.stargazers_count ?? 0}
              </Text>
              <Icon as={FaStar} color="blackAlpha.800" boxSize={4} />
            </Flex>
          </Flex>
          <Text color="gray.600" fontSize="sm">
            {repo.description ? repo.description : "No description available"}
          </Text>
        </Box>
      ))}
    </>
  );
};

export default Repositories;
