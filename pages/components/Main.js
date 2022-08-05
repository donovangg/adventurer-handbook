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
      <Flex
        flex="1"
        flexWrap="wrap"
        gap="12"
        justifyContent="center"
        backgroundColor="white"
        paddingTop="10"
      >
        <Box
          w="600px"
          maxH="300px"
          boxShadow="2xl"
          rounded="md"
          backgroundColor="white"
        >
          <Text fontSize="3xl">Hi Adventurer</Text>
        </Box>
        <Box
          w="600px"
          maxH="300px"
          boxShadow="2xl"
          rounded="md"
          backgroundColor="white"
        >
          <Text fontSize="3xl">Events Box</Text>
        </Box>
        <Box
          w="400px"
          maxH="300px"
          boxShadow="2xl"
          rounded="md"
          backgroundColor="gray.400"
        >
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
        <Box
          w="400px"
          maxH="300px"
          boxShadow="2xl"
          rounded="md"
          backgroundColor="white"
        >
          <Text fontSize="3xl">Farmable Weapons</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
