import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import DrawerNav from "./components/DrawerNav";
import Main from "./components/Main";

export default function Home({ characters }) {
  console.log(characters);

  return (
    <div>
      <header>
        <DrawerNav />
      </header>
      <h2>Biscuits hops on commentary</h2>
      <Main characters={characters} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: characters } = await supabase.from("characters").select("*");

  return {
    props: {
      characters,
    },
  };
};
