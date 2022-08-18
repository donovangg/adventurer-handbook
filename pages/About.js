import React from "react";
import Layout from "../components/Layout";
import { Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Layout>
      <Flex flex="1" backgroundColor="gray.50">
        <Text color="black">About page</Text>
      </Flex>
    </Layout>
  );
}
