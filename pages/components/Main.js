import React, { useEffect, useState } from "react";
import { Flex, Spacer, Box, Text } from "@chakra-ui/react";

export default function Main({ characters }) {
  console.log(characters);
  return (
    <div>
      <h2>Biscuits hops on</h2>
      <Flex>
        <Box w="400px" boxShadow="base">
          <Text fontSize="3xl">Hi Aventurer</Text>
        </Box>
        <Box w="400px" boxShadow="base">
          <Text>yeet</Text>
          {characters.map((character) => (
            <div>
              <h2>{character.name}</h2>
              <img src={character.icon} />
            </div>
          ))}
        </Box>
      </Flex>
    </div>
  );
}
