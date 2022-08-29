import React, {useState, useEffect} from "react";
import Layout from "../components/Layout";
import { Flex, Text, Image } from "@chakra-ui/react";
import { supabase } from "../utils/supabase";
import CharacterImage from "../components/CharacterImage";

export default function Characters({characters}) {
  return (
    <Layout>
      <Flex flexDir="column" flex="1" backgroundColor="gray.50">
        <Text color="black">charactere page</Text>
        <Flex flexWrap="wrap">
          {characters.map((character) => (
            <CharacterImage key={character.id} icon={character.icon} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: characters } = await supabase.from("characters").select("*");

  return {
    props: {
      characters,
    },
  };
};