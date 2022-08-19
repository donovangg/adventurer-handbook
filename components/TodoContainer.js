import React from "react";
import Todo from "./Todo";
import { Box, Flex, UnorderedList } from "@chakra-ui/react";

export default function TodoContainer({ todos }) {
  return (
    <Box marginTop="12">
      {todos.map((todo) => (
        <UnorderedList key={todo.id}>
          <Todo text={todo.text} completed={todo.completed} />
        </UnorderedList>
      ))}
    </Box>
  );
}
