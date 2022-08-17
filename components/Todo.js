import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Todo({text, completed}) {
  return (
    <Flex>
        <Text>{text}</Text>
    </Flex>
  )
}
