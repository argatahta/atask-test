import { css } from "@emotion/react";

export default css`
  :root {
    --mobile-max-width: 31.25rem;
  }

  body,
  #root {
    height: auto;
    min-height: 100vh;
    min-height: 100dvh;

    display: flex;
    flex-direction: column;
  }

  #root {
    width: 100%;
    max-width: var(--mobile-max-width);

    margin: 0 auto;
  }
`;
