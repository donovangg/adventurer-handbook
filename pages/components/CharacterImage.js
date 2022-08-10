import React from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";

export default function CharacterImage({ name, icon }) {
  return (
    <Flex>
      <Image margin="1" borderRadius="full" width="64px" src={icon} />
    </Flex>
  );
}
