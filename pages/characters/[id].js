import React from 'react'

export const getStaticPaths = async () => {
  const res = await fetch("https://api.genshin.dev/characters/all");
  const data = await res.json();

  const paths = data.map((character) => {
    return{
      params: {id: character.name.toLowerCase()}
    }
  })

  return {
    paths: paths, 
    fallback: false
  }

}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://api.genshin.dev/characters/${id}`);
  const data = await res.json();

  return {
    props: {
      character: data,
    }
  }
}

export default function details({character}) {
  console.log("details page " + character);
  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.vision}</h2>
      <img src={`https://api.genshin.dev/characters/${character.name.toLowerCase()}/gacha-splash`} />
    </div>
  )
}
