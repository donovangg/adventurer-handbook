import React from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Flex
      backgroundColor="gray.50"
      width="15vw"
      height="100vh"
      flexDir="column"
      borderRight="1px"
      display={["none", "none", "block", "block"]}
    >
      Sidebar
    </Flex>
  );
}
