import React from "react";
import { Flex, Text, Image, Button } from "@chakra-ui/react";

export default function Login({ signInWithGoogle, user }) {
  return(
    <>
      {!user ? <Button onClick={signInWithGoogle}>Log In</Button> :
      <Button>Da Baby</Button>
      }
    </>
  );
}
