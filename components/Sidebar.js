import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar() {
  const background = useColorModeValue("gray.800", "gray.50");

  return (
    <Flex
      backgroundColor={background}
      alignItems="center"
      justifyContent="flex-start"
      color="black"
      width="15vw"
      minWidth="15vw"
      minHeight="100vh"
      flexDir="column"
      borderRight="1px"
      display={["none", "none", "none", "flex"]}
    >
      <Flex as="nav" flexDir="column" border="2px" minH="50%">
        <Image width="100%" height="auto" src="https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/logo.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbG9nby53ZWJwIiwiaWF0IjoxNjYwNzA0NTA3LCJleHAiOjE5NzYwNjQ1MDd9.kTbZeOwfgSAVYzQ78khyMBshRUenqygRIvUf151TGuc" />
        <Flex flexDir="column" as="ul" mt="6">
          <NextLink href="/">
            <Link fontSize="2xl">Home</Link>
          </NextLink>
          <NextLink href="/TodoList">
            <Link fontSize="2xl">Todo</Link>
          </NextLink>
          <NextLink href="/Characters">
            <Link fontSize="2xl">Characters</Link>
          </NextLink>
          <NextLink href="/About">
            <Link fontSize="2xl">About</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
