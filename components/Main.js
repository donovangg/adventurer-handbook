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
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["300px", "300px", "600px", "600px"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
            border="2px"
            position="relative"
            background="url(https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/adventurers-guild.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvYWR2ZW50dXJlcnMtZ3VpbGQud2VicCIsImlhdCI6MTY2MDIwMzQ5NywiZXhwIjoxOTc1NTYzNDk3fQ.RSJgcWdgAhOBCim0BfsqvXqwHqJ6dxR7WCp_8v1SnFM) center/cover no-repeat"
          >
            <Box
              backgroundColor="teal.900"
              position="absolute"
              width="100%"
              height="100%"
              opacity="50%"
            ></Box>
            <Text color="white" textAlign="center" zIndex="6" fontSize="3xl">
              Hi Adventurer its {today}
            </Text>
            <Text color="white" zIndex="6" textAlign="center">
              Make sure you do your commissions and try the event
            </Text>
          </Flex>
          <Flex
            w={["300px", "300px", "600px", "600px"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
            position="relative"
            background="url(https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/summertime-odyssey.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvc3VtbWVydGltZS1vZHlzc2V5LndlYnAiLCJpYXQiOjE2NjAyMDU1NjAsImV4cCI6MTk3NTU2NTU2MH0.vOjT2h2MciX8kpVqAVdknCcHhEpjNqt5YEDggBMZSRg) right/cover no-repeat"
          >
            <Box
              backgroundColor="teal.900"
              position="absolute"
              width="100%"
              height="100%"
              opacity="50%"
            ></Box>
            <Text fontSize="3xl">Events Box</Text>
          </Flex>
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
