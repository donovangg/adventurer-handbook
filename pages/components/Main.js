import React, { useEffect, useState } from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";

export default function Main({ characters }) {
  console.log(characters);
  return (
    <div>
      <h2>Biscuits hops on</h2>
      <Flex>
        <Box w="400px" boxShadow="base">
          <Text fontSize="3xl">Hi Aventurer</Text>
        </Box>
        <Flex
          w="400px"
          boxShadow="base"
          flexWrap="wrap"
          backgroundColor="gray.400"
        >
          {characters.map((character) => (
            <div>
              <h2>{character.name}</h2>
              <Image
                boxSize="100px"
                borderRadius="full"
                src={character.icon}
                alt={character.name}
              />
            </div>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
