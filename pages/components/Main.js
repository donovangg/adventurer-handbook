import React, { useEffect, useState } from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";
import CharacterImage from "./CharacterImage";
import Sidebar from "./Sidebar";

export default function Main({ characters }) {
  console.log(characters);

  // this uses date-fns to get todays date
  let today = format(new Date(), "EEEE");
  console.log(today);

  return (
    <Flex>
      <Sidebar />
      <Flex flex="1" gap="12" justifyContent="center" backgroundColor="red.300">
        <Box w="400px" maxH="400px" boxShadow="base" backgroundColor="white">
          <Text fontSize="3xl">Hi Aventurer</Text>
        </Box>
        <Box w="400px" maxH="400px" backgroundColor="gray.400" boxShadow="base">
          <h2>Farmable today</h2>
          <Flex flexWrap="wrap">
            {characters.map((character) => (
              <div key={character.id}>
                {/* map over array that includes todays date */}
                {character.farmable_days.includes(today) ? (
                  <Flex flexDir="column">
                    {/* <p>{character.name}</p>
                    <Image
                      borderRadius="full"
                      width="64px"
                      src={character.icon}
                    /> */}
                    <CharacterImage
                      icon={character.icon}
                      name={character.name}
                    />
                  </Flex>
                ) : (
                  ""
                )}
              </div>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
