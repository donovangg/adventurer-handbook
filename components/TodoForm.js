import React, {useMemo, useCallback} from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/react";
import debounce from 'lodash.debounce'

export default function TodoForm({ todos, setTodos, inputText, setInputText }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
    
  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <FormControl marginTop="10">
        <Flex width="30rem">
          <Input
            type="text"
            onChange={inputTextHandler}
            placeholder="Add todo"
            value={inputText}
            variant="flushed"
            size="lg"
            borderColor="purple.600"
            focusBorderColor="pink.300"
          />
          <Button onClick={addTodoHandler} colorScheme="purple">
            Add
          </Button>
        </Flex>
      </FormControl>
    </div>
  );
}
