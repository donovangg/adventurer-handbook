import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

export default function TodoForm({ todos, setTodos, inputText, setInputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random() * 100}
    ])
    setInputText('');
  }

  return (
    <div>
      <FormControl>
        <Input
          type="text"
          onChange={inputTextHandler}
          placeholder="Add todo"
          value={inputText}
        />
        <Button onClick={addTodoHandler}>Add</Button>
      </FormControl>
    </div>
  );
}
