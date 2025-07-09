import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Global } from "@emotion/react";

import { queryClient } from "./utils/react-query/query-client";

import styles from "./styles";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <App />
        <Global styles={styles} />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
