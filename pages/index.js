import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import Main from "../components/Main";
import Header from "../components/Header";
import { useColorMode } from "@chakra-ui/react";

export default function Home({ characters, weapons }) {
  // const { toggleColorMode, colorMode } = useColorMode();
  const [user, setUser] = useState(null);
  // const [session, setSession] = useState(null);
  // const [initialLoading, setIsLoadingInitial] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const session = supabase.auth.session();
  //     setSession(session);
  //     setUser(session?.user ?? null);
  //     setIsLoadingInitial(false);
  //   }, 100);

  // const { data: authListener } = supabase.auth.onAuthStateChange(
  //   async (_event, session) => {
  //     setSession(session);
  //     setUser(session?.user ?? null);
  //   }
  // );
  // }, [])

  // async function checkUser() {
  //   const user = supabase.auth.user();
  //   setUser(user);
  //   console.log(user)
  // }

  // async function signInWithGoogle() {
  //   const { user, session, error } = await supabase.auth.signIn({
  //     provider: "google",
  //   });
  //  console.log(user);
  // }

  // async function signout() {
  //   const { error } = await supabase.auth.signOut();
  //   setUser(null)
  // }

  return (
    <div>
      <Header />
      <Main characters={characters} weapons={weapons} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: characters } = await supabase.from("characters").select("*");
  const { data: weapons } = await supabase.from("weapons").select("*");

  return {
    props: {
      characters,
      weapons,
    },
  };
};
