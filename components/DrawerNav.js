import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  Grid,
  Icon,
  Link,
  Flex,
  Image
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";

export default function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <IconButton
        onClick={onOpen}
        ref={btnRef}
        display={["flex", "flex", "none", "none"]}
        icon={<FaBars />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Flex flexDir="column" as="ul" mt="6">
            <Image
              width="20%"
              height="auto"
              src="https://lxckenztuorwyfemtkwg.supabase.co/storage/v1/object/sign/assets/logo.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvbG9nby53ZWJwIiwiaWF0IjoxNjYwNzA0NTA3LCJleHAiOjE5NzYwNjQ1MDd9.kTbZeOwfgSAVYzQ78khyMBshRUenqygRIvUf151TGuc"
            />
            <NextLink href="/">
              <Link fontSize="2xl">Home</Link>
            </NextLink>
            <NextLink href="/todolist">
              <Link fontSize="2xl">Todo</Link>
            </NextLink>
            <NextLink href="/characters">
              <Link fontSize="2xl">Characters</Link>
            </NextLink>
            <NextLink href="/about">
              <Link fontSize="2xl">About</Link>
            </NextLink>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
