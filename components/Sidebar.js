import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Sidebar() {
  const background = useColorModeValue("gray.800", "gray.50");

  return (
    <Flex
      backgroundColor={background}
      width="15vw"
      minWidth="15vw"
      minHeight="100vh"
      flexDir="column"
      borderRight="1px"
      display={["none", "none", "none", "none", "block"]}
    >
      Sidebar
    </Flex>
  );
}
