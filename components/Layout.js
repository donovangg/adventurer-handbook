import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Flex flex="1" maxW="100%">{children}</Flex>
      </Flex>
    </>
  );
}
