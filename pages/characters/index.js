import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Flex, Text, Image } from "@chakra-ui/react";
import { supabase } from "../../utils/supabase";
import Link from "next/link";

export default function Characters({characters}) {
 console.log(characters)

//   const fetchCharacters = async () => {
//     const res = await fetch("https://api.genshin.dev/characters/all");
//     const data = await res.json();
//     setCharacters(data);
//   };

//   useEffect(() => {
//     fetchCharacters();
//   }, []);

  return (
    <Layout>
      <Flex flexDir="column" flex="1" color="black" backgroundColor="gray.50">
        <Text color="black">charactere page</Text>
        <Flex flexWrap="wrap">
          {characters.map((character) => (
            <div>
            <Link href={`/characters/${character.name.toLowerCase()}`}>
            <a>
              <h2>{character.name}</h2>
              <Image src={character.icon} alt={character.name} />
              </a>
            </Link>
            </div>
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
