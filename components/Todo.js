import React from 'react'
import { Box, Flex, Text, Button } from "@chakra-ui/react";

export default function Todo({text, completed}) {
  return (
    <Flex width="100%" border="@2px">
        <Text flex="1">{text}</Text>
        <Button>dsad</Button>
        <Button>iuyb</Button>
    </Flex>
  )
}
