import React, { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";
import CharacterImage from "./CharacterImage";
import Sidebar from "./Sidebar";

export default function Main({ characters, weapons }) {
  // console.log(characters);

  // this uses date-fns to get todays date
  let today = format(new Date(), "EEEE");
  console.log(today);

  return (
    <Flex>
      <Sidebar />
      <Flex
        flex="1"
        flexDir="column"
        gap="12"
        justifyContent="center"
        backgroundColor="gray.50"
        paddingTop="10"
        paddingBottom="5rem"
        border="2px"
        borderColor="green"
      >
        <Flex
          maxW="100%"
          border="2px"
          borderColor="red"
          gap="10"
          alignItems="center"
          alignContent="center"
          margin="0"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            w={["300px", "300px", "600px", "600px"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
          >
            <Text fontSize="3xl">Hi Adventurer</Text>
          </Box>
          <Box
            w={["300px", "300px", "600px", "600px"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
          >
            <Text fontSize="3xl">Events Box</Text>
          </Box>
        </Flex>
        <Flex
          maxW="100%"
          border="2px"
          borderColor="blue"
          gap="10"
          alignItems="center"
          margin="0"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            w={["300px", "300px", "600px", "600px"]}
            minH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="gray.400"
            padding="2"
          >
            <h2>Farmable today</h2>
            <Flex flexWrap="wrap">
              {characters.map((character) => (
                <div key={character.id}>
                  {/* map over array that includes todays date */}
                  {character.farmable_days.includes(today) ? (
                    <Flex flexDir="column">
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
            <Flex flexWrap="wrap">
              {weapons.map((weapon) => (
                <div key={weapon.id}>
                  {/* map over array that includes todays date */}
                  {weapon.farmable_days.includes(today) ? (
                    <Flex flexDir="column">
                      <CharacterImage icon={weapon.image} name={weapon.name} />
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
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
          >
            <Text fontSize="3xl">Farmable Weapons</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
