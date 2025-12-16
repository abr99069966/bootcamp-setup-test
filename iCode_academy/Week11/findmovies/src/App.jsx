import { useState } from 'react'
import { Header } from './component/header'
import './App.css'
import { MovieCard } from './component/MovieCard'
import { Movies } from './component/Movies'

function App() {
  const movieIds = [
    "tt2250912",
    "tt1630029",
    "tt9114286",
    "tt11564570",
    "tt14109724",
    "tt13833688",
    "tt15474916",
    "tt8093700",
    "tt10648342",
    "tt1877830",
    "tt3704428",
    "tt1745960",
    "tt1464335",
    "tt6710474",
    "tt10872600",
    "tt10838180",
    "tt1160419",
    "tt11291274",
    "tt12593682",
    "tt15398776"
  ];
 

  return (
    <>
    <Header/>
    <Movies movieId={movieIds}/>
    </>
  )
}

export default App

// tailwindcss.com