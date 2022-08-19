import React from "react";
import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";

export default function Todo({ text, completed }) {
  return (
    <Flex width="100%" backgroundColor="purple.100" justifyContent="center" alignItems="center" marginTop="3">
      <Text flex="1" fontSize="lg">{text}</Text>
      <IconButton variant="outline" colorScheme="purple" icon={<FaCheck />} />
      <IconButton variant="outline" colorScheme="purple" icon={<FaTrashAlt />} />
    </Flex>
  );
}
