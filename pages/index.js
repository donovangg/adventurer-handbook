import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { supabase } from "../utils/supabase";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";

export default function Home({ characters }) {
  console.log(characters);

  return (
    <div>
      <Header />
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
