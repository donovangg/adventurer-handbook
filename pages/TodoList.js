import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import TodoContainer from "../components/TodoContainer";
import Layout from "../components/Layout";
import { Flex, Text } from "@chakra-ui/react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <Layout>
      <Flex flex="1" color="black" justifyContent="center" alignItems="center" flexDir="column" border="2px" backgroundColor="gray.50">
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <TodoContainer todos={todos} inputText={inputText} />
      </Flex>
    </Layout>
  );
}
