import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import Todo from '../components/Todo';
import TodoContainer from '../components/TodoContainer';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoContainer todos={todos} inputText={inputText} />
    </div>
  );
}
