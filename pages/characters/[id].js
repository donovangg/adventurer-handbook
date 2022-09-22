// import React from "react";
// import { Flex, Box, Text, Image } from "@chakra-ui/react";
// import Layout from "../../components/Layout";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://api.genshin.dev/characters/all");
//   const data = await res.json();

//   const paths = data.map((character) => {
//     return {
//       params: { id: character.name.toLowerCase() },
//     };
//   }); 

//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(`https://api.genshin.dev/characters/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       character: data,
//     },
//   };
// };

// export default function details({ character }) {
//   console.log("details page " + character);
//   return (
//     <Layout>
//       <Flex
//         backgroundColor="gray.50"
//         width="100%"
//         color="black"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         as="main"
//       >
//         <Flex>
//           <Flex>
//             <Flex flexDir="column">
//               <Text>{character.name}</Text>
//               <Text>{character.vision}</Text>
//             </Flex>
//             <Image
//               src={`https://api.genshin.dev/characters/${character.name.toLowerCase()}/icon`}
//               alt={character.name}
//               boxSize="150px"
//               objectFit="cover"
//             />
//           </Flex>
//         </Flex>
//       </Flex>
//     </Layout>
//   );
// }
