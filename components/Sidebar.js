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
<<<<<<< HEAD
      backgroundColor={background}
      width="15vw"
=======
      backgroundColor="gray.50"
      minWidth="15vw"
>>>>>>> 8701e3d11983844a72afbffaf665910fa9bec186
      height="100vh"
      flexDir="column"
      borderRight="1px"
      display={["none", "none", "none", "none", "block"]}
    >
      Sidebar
    </Flex>
  );
}
