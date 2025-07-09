import { useState } from "react";
import { Accordion, Span } from "@chakra-ui/react";

import Repositories from "./Repositories";
import type { UsersProps } from "./types";

const Users = (props: UsersProps) => {
  const { data, username, loading } = props;

  const [value, setValue] = useState([""]);

  if (loading) {
    return <Span>Loading...</Span>;
  }

  if (!data || data.length === 0) {
    return <Span>No users found</Span>;
  }

  return (
    <>
      <Span>Showing users for {username}</Span>
      <Accordion.Root
        value={value}
        onValueChange={(e) => setValue(e.value)}
        collapsible
      >
        {data.map((item, index) => (
          <Accordion.Item key={index} value={item.login}>
            <Accordion.ItemTrigger>
              <Span flex="1">{item.login}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <Repositories username={item.login} isExpanded={item.login === value.join("")} />
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
};

export default Users;
