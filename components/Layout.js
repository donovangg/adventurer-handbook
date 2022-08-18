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
        <main>{children}</main>
      </Flex>
    </>
  );
}
