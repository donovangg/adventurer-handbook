import React from "react";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import DrawerNav from "./DrawerNav";

export default function Header() {
  return (
    <Flex as="header" minH="5vh" backgroundColor="gray.50">
      <DrawerNav />
    </Flex>
  );
}
