import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Flex, Text, Image, Tooltip, Box } from "@chakra-ui/react";
import { supabase } from "../../utils/supabase";
import Link from "next/link";

export default function Characters({ characters }) {
  console.log(characters);

  return (
    <Layout>
      <Flex flexDir="column" flex="1" color="black" backgroundColor="gray.50">
        <Text
          bgGradient="linear(to-l, #6B46C1, #CF3DA9)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          paddingTop="5"
          paddingBottom="5"
          textAlign="center"
        >
          Characters
        </Text>
        <Flex flexWrap="wrap" gap="2" paddingTop="20" justifyContent="center">
          {characters.map((character) => (
            <Box key={character.id} boxShadow="2xl" rounded="lg">
              <Link href={`/characters/${character.name.toLowerCase()}`}>
                <Box p="4" cursor="pointer">
                  <Tooltip label={character.name}>
                    <a>
                      <Image
                        src={character.icon}
                        alt={character.name}
                        boxSize="200px"
                      />
                    </a>
                  </Tooltip>
                </Box>
              </Link>
            </Box>
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
