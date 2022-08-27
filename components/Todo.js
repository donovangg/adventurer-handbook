import React from "react";
import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

export default function Todo({ text, completed, todo, todos, setTodos }) {
  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <Flex
      width="100%"
      backgroundColor="purple.100"
      justifyContent="center"
      alignItems="center"
      marginTop="3"
    >
      {todo.completed ? (
        <Text flex="1" opacity="0.5" textDecoration="line-through" fontSize="lg">
          {text}
        </Text>
      ) : (
        <Text flex="1" fontSize="lg">
          {text}
        </Text>
      )}
      <IconButton
        onClick={completeHandler}
        variant="outline"
        colorScheme="purple"
        icon={<FaCheck />}
      />
      <IconButton
        onClick={deleteHandler}
        variant="outline"
        colorScheme="purple"
        icon={<FaTrashAlt />}
      />
    </Flex>
  );
}
