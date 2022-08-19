import React, { useEffect, useState } from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";
import CharacterImage from "./CharacterImage";
import Sidebar from "./Sidebar";
import TodoContainer from "./TodoContainer";

export default function Main({ characters, weapons }) {
  // console.log(characters);
  // const background = useColorModeValue("gray.800", "gray.50");
  // this uses date-fns to get todays date
  let today = format(new Date(), "EEEE");

  // convert to epoch time than to GMT for utc time
  let epoch = Math.floor(new Date().getTime() / 1000.0);
  let myDate = new Date(epoch * 1000);
  let current_day = myDate.toGMTString();
  console.log(current_day);

  return (
    <Flex as="main">
      <Sidebar flex="1" />
      <Flex
        flex="1"
        flexDir="column"
        gap="12"
        justifyContent="center"
        paddingTop="10"
        paddingBottom="5rem"
        maxW="100%"
        backgroundColor="gray.50"
      >
        <Flex
          width="100%"
          gap="10"
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          margin="0"
          flexDir={["column", "column", "column", "row"]}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["100%", "90%", "70%", "40%"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="md"
            backgroundColor="white"
            position="relative"
            background="url(https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/adventurers-guild.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvYWR2ZW50dXJlcnMtZ3VpbGQud2VicCIsImlhdCI6MTY2MDIwMzQ5NywiZXhwIjoxOTc1NTYzNDk3fQ.RSJgcWdgAhOBCim0BfsqvXqwHqJ6dxR7WCp_8v1SnFM) center/cover no-repeat"
          >
            <Box
              position="absolute"
              boxShadow="2xl"
              rounded="lg"
              width="100%"
              height="100%"
              opacity="70%"
              backgroundColor="purple.600"
            ></Box>
            <Text
              color="white"
              textAlign="center"
              zIndex="6"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              Hi Adventurer its {today}
            </Text>
            <Text color="white" zIndex="6" textAlign="center">
              Make sure you do your commissions and try the event
            </Text>
          </Flex>
          <Flex
            flexDir="column"
            justifyContent="center"
            w={["100%", "90%", "70%", "40%"]}
            boxShadow="2xl"
            rounded="lg"
            minH="300px"
            maxH="300px"
            backgroundColor="white"
            position="relative"
            background="url(https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/summertime-odyssey.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvc3VtbWVydGltZS1vZHlzc2V5LndlYnAiLCJpYXQiOjE2NjAyMDU1NjAsImV4cCI6MTk3NTU2NTU2MH0.vOjT2h2MciX8kpVqAVdknCcHhEpjNqt5YEDggBMZSRg) right/cover no-repeat"
            role="group"
          >
            <Box
              backgroundColor="purple.600"
              boxShadow="2xl"
              rounded="lg"
              position="absolute"
              width="100%"
              height="100%"
              opacity="80%"
              _groupHover={{ opacity: "0", transition: "500ms" }}
            ></Box>
            <Text
              textAlign="center"
              color="white"
              zIndex="6"
              fontSize="3xl"
              _groupHover={{ display: "none" }}
            >
              Current Event
            </Text>
          </Flex>
        </Flex>
        <Flex
          maxW="100%"
          gap="10"
          alignItems="center"
          justifyContent="center"
          margin="0"
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            w={["100%", "90%", "600px", "600px"]}
            minH="300px"
            boxShadow="2xl"
            rounded="lg"
            padding="2"
          >
            <Text
              bgGradient="linear(to-l, #6B46C1, #CF3DA9)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              Farmable today
            </Text>
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
          <Flex
            flexDir="column"
            justifyContent="center"
            alignAitems="center"
            w={["100%", "90%", "70%", "40%"]}
            minH="300px"
            maxH="300px"
            boxShadow="2xl"
            rounded="lg"
            backgroundColor="white"
            position="relative"
            background="url(https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/golden-flames.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ29sZGVuLWZsYW1lcy53ZWJwIiwiaWF0IjoxNjYwNDI0ODE3LCJleHAiOjE5NzU3ODQ4MTd9.eVBSbyOeA92CG5tcsuoHdTseaHnvBlpBtPZU98VsQ90) right/cover no-repeat"
            role="group"
          >
            <Box
              backgroundColor="purple.600"
              boxShadow="2xl"
              rounded="lg"
              position="absolute"
              width="100%"
              height="100%"
              opacity="80%"
              _groupHover={{ opacity: "0", transition: "500ms"  }}
            ></Box>
            <Text
              color="white"
              zIndex="6"
              textAlign="center"
              fontSize="3xl"
              _groupHover={{ display: "none" }}
            >
              Featured Wish
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
