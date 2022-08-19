import React from "react";
import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

export default function Todo({ text, completed }) {
  return (
    <Flex width="100%" border="@2px">
      <Text flex="1">{text}</Text>
      <IconButton variant="outline" colorScheme="purple" icon={<FaCheck />} />
      <IconButton variant="outline" colorScheme="purple" icon={<FaTrashAlt />} />
    </Flex>
  );
}
