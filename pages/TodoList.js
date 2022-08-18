import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import Todo from '../components/Todo';
import TodoContainer from '../components/TodoContainer';
import Layout from "../components/Layout";
import { useColorModeValue } from "@chakra-ui/react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const background = useColorModeValue("gray.800", "gray.50");
  return (
    <Layout background={background}>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoContainer todos={todos} inputText={inputText} />
    </Layout>
  );
}
