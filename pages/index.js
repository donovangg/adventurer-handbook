import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import { useColorMode } from "@chakra-ui/react";

export default function Home({ characters, weapons }) {
  // const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div>
      <Header
      />
      <Main characters={characters} weapons={weapons} />
    </div>
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
