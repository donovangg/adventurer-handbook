import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  IconButton,
  Icon,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { FaBars, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import DrawerNav from "./DrawerNav";

export default function Header({ colorMode, useColorMode, toggleColorMode }) {
  return (
    <Flex
      backgroundColor="white"
      as="header"
      minH="5vh"
      borderTop="4px"
      borderColor="purple.600"
      justifyContent="flex-end"
    >
      <DrawerNav />
      <Flex justifyContent="center">
        <Link href="https://github.com/donovangomez/portfolio/tree/main/src">
          <a>
            <IconButton icon={<FaGithub />} variant="transparent" />
          </a>
        </Link>
        {/* toggle darkmode button */}
        {/* <Button onClick={toggleColorMode}>asdsa</Button> */}
      </Flex>
    </Flex>
  );
}
