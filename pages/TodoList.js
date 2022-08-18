import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import Todo from '../components/Todo';
import TodoContainer from '../components/TodoContainer';
import Layout from "../components/Layout";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <Layout>
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
