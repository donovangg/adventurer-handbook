import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaBeer, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import DrawerNav from "./DrawerNav";

export default function Header() {
  return (
    <Flex as="header" minH="5vh" backgroundColor="teal.500">
      <DrawerNav />
      <Flex>
        <Link href="https://github.com/donovangomez/portfolio/tree/main/src">
          <a>
            <IconButton icon={<FaGithub />} />
          </a>
        </Link>
        {/* <IconButton
          icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
          aria-label="Toggle theme"
          onClick={toggleColorMode}
          variant="unstyled"
          fontSize="2xl"
          _hover={{ color: "blue.400" }}
          _focus={{ border: "none", backgroundColor: "transparent" }}
        /> */}
      </Flex>
    </Flex>
  );
}
