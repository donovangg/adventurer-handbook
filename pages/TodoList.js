import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import Todo from "../components/Todo";
import TodoContainer from "../components/TodoContainer";
import Layout from "../components/Layout";
import { Flex, Text, Box } from "@chakra-ui/react";
import { supabase } from "../utils/supabase";
import { format, compareAsc } from "date-fns";
import CharacterImage from "../components/CharacterImage";

export default function TodoList({ characters, weapons }) {
  const [todos, setTodos] = useState([
    { text: "Do my daily commissions", completed: false, id: 1 },
  ]);
  const [inputText, setInputText] = useState("");
  let today = format(new Date(), "EEEE");
  return (
    <Layout>
      <Flex
        flex="1"
        minH="100vh"
        color="black"
        justifyContent="center"
        alignItems="center"
        flexDir={["column", "column", "column", "column", "row"]}
        backgroundColor="gray.100"
        gap="10"
      >
        <Flex
          flexDir="column"
          p="4"
          backgroundColor="white"
          minH="22rem"
          minW="30rem"
        >
          <TodoForm
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
          />
          <TodoContainer todos={todos} setTodos={setTodos} inputText={inputText} />
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: characters } = await supabase.from("characters").select("*");
  const { data: weapons } = await supabase.from("weapons").select("*");

  return {
    props: {
      characters,
      weapons,
    },
  };
};
