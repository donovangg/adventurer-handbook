import React from "react";
import Todo from "./Todo";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function TodoContainer({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo text={todo.text} completed={todo.completed} />
        </div>
      ))}
    </div>
  );
}
