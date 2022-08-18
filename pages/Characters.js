import React from "react";
import Layout from "../components/Layout";
import { Flex, Text } from "@chakra-ui/react";

export default function Characters() {
  return (
    <Layout>
      <Flex flex="1" backgroundColor="gray.50">
        <Text color="black">charactere page</Text>
      </Flex>
    </Layout>
  );
}
