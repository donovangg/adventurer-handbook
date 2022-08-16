import React from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";

export default function CharacterImage({ name, icon }) {
  return (
    <Flex>
      <Image margin="1" borderRadius="full" border="2px" borderColor="purple.700" width="64px" src={icon} />
    </Flex>
  );
}
