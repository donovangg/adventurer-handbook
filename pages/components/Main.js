import React, { useEffect, useState } from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import { format, compareAsc } from "date-fns";

export default function Main({ characters }) {
  console.log(characters);

  // this uses date-fns to get todays date
  let today = format(new Date(), "EEEE");
  console.log(today);

  return (
    <div>
      <h2>Biscuits hops on</h2>
      <Flex>
        <Box w="400px" boxShadow="base">
          <Text fontSize="3xl">Hi Aventurer</Text>
        </Box>
        <Box w="400px" backgroundColor="gray.400" boxShadow="base">
          <h2>Farmable today</h2>
          <Flex flexWrap="wrap">
            {characters.map((character) => (
              <div>
                {/* map over array that includes todays date */}
                {character.farmable_days.includes(today) ? (
                  <Flex flexDir="column">
                    <p>{character.name}</p>
                    <Image
                      borderRadius="full"
                      width="64px"
                      src={character.icon}
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
    </div>
  );
}
