import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Flex, Box, Text, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <Layout>
      <Flex flexDir="column" backgroundColor="gray.50">
        <Text
          as="h1"
          bgGradient="linear(to-l, #6B46C1, #CF3DA9)"
          bgClip="text"
          fontSize="8xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          About
        </Text>
        <Flex flexDir={['column', 'column', 'column', 'row']} justifyContent="center" alignItems="center">
          <Flex flexDir="column" flex="1">
            <Text fontSize="3xl" mb="4" color="black">
              Thanks for checking out Adventurer Handbook!
            </Text>
            <Text fontSize="lg" mb="4" color="black">
              I made this website for the purpose of planning out your Genshin
              session. If you're like me, you do like the game, but you've
              suffered from burnout and the game can feel like a chore. If that
              isn't the case, you're working a fulltime job which is also like
              me. I would have trouble planning my sessions and wander around
              aimlessly wondering what to do.
            </Text>
            <Text fontSize="lg" mb="4" color="black">
              With this site you can see which characters you can farm for on a
              certain day so you're not going through the menu over and over.
              You can also jot down some other todos while you have the window
              up. If you're logged in though, you can save it for your next
              session!
            </Text>
            <Text>
              Any feedback or if you want to contribute you can check out the{" "}
              <Link href="github.com/donovangomez" target="_blank">
                <a>Github Repo</a>
              </Link>{" "}
            </Text>
          </Flex>
          <Flex flex="1" flexDir="column" lignItems="center" justifyContent="center">
            <Image
              src="/keqing.png"
              width="50%"
              borderRadius="lg"
              height="auto"
            />
            <Text color="black">
              Feel free to reach me on
              <Link href="https://twitter.com/donovanGomezJS" target="_blank">
                <a>Twitter</a>
              </Link>{" "}
              for comments
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
}
