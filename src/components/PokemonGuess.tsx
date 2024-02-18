import  {
  FormEvent,
  useEffect,
  useState,
} from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "./Header";

import Footesr from "./Footesr";
import LoseScreen from "./LoseScreen";
import WinScreen from "./WinScreen";

export type Pokemon = {
  name:string,
  url:string
}
const PokemonGuess = () => {

  const [pokemons, setpokemons] = useState<Pokemon[]>([])


  const [params] = useSearchParams();
  const gen = params.get("gen") != null ? Number(params.get("gen")) :'pokemon?limit=100000&offset=0'
  
  useEffect(() => {
    setLoading(true)
    const url =
      gen != "pokemon?limit=100000&offset=0"
        ? `generation/${gen}`
        : "pokemon?limit=100000&offset=0";
    if (url != "pokemon?limit=100000&offset=0") {
      fetch(`https://pokeapi.co/api/v2/${url}`)
        .then((data) => data.json())
        .then((data) => {
          setpokemons(data.pokemon_species)
          setLoading(false)
          setRandom(Math.floor(Math.random() * pokemons.length))
        });
    } else {
      fetch(`https://pokeapi.co/api/v2/${url}`)
        .then((data) => data.json())
        .then((data) => {
          setpokemons(data.results)
          setLoading(false)
          setRandom(Math.floor(Math.random() * pokemons.length))
        });
    }
  },[gen])
  useEffect(() => {
setRandom(Math.floor(Math.random() * pokemons.length));
  },[pokemons])
  // const pokemons:Pokemon[] = usePokemons(`generation/${gen}`)   

  
  const [hearts, setHearts] = useState<number>(3);
  const [lose, setLose] = useState(false)
  const [guess, setGuess] = useState<boolean>(false);
  const [streak, setStreak] = useState(0);
  const [pokemon, setPokemon] = useState<string>("");
  const [random, setRandom] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(pokemons.length == 0);
  const [hint, sethint] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);
  const [hintsQty, setHintsQty] = useState<number>(3)
  const bigStreak: number = localStorage.getItem("bigStreak")
    ? Number(localStorage.getItem("bigStreak"))
    : 0;
  
    
    
    

  const name:string | null = params.get("name")
  const dificulty = params.get("difculty");
  const logo = params.get("logo");
  const navigate = useNavigate();
  if (!name || !dificulty) {
    navigate("/");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (pokemon.trim().toLowerCase() == pokemons[random].name.trim().toLowerCase()) {
      setStreak((streak) => streak + 1);
      setGuess(true);
    } else if (!guess) {
      setHearts(hearts => hearts - 1);
      setLose(true)
      

      if (bigStreak < streak) {
        localStorage.setItem("bigStreak", streak.toString());
      } else {
        if (bigStreak === 0) {
          localStorage.setItem("bigStreak", streak.toString());
        }
      }
    }
  };

  if ( lose ) {

    
    return (
      <>
        <Header name={name} logo={logo} streak={streak} hearts={hearts} hintsQty={hintsQty} />
        <LoseScreen
        hintsQty={hintsQty}
        setHintsQty={setHintsQty}
        setLose={setLose}
        hearts={hearts}
        loading={loading} 
        setLoading={setLoading} 
        setGuess={setGuess}
        setHearts={setHearts}
        setPokemon={setPokemon}
        setRandom={setRandom}
        setStreak={setStreak}
        pokemons={pokemons}
        random={random}
        />
        
      </>
    );
  }

  return (
    <>
      <Header
        name={name}
        logo={logo}
        streak={streak}
        hearts={hearts}
        hintsQty={hintsQty}
      />
      <WinScreen
        dificulty={dificulty}
        hintsQty={hintsQty}
        setHintsQty={setHintsQty}
        setGuess={setGuess}
        setLoading={setLoading}
        setRandom={setRandom}
        setPokemon={setPokemon}
        setTimer={setTimer}
        sethint={sethint}
        loading={loading}
        pokemon={pokemon}
        guess={guess}
        timer={timer}
        hint={hint}
        handleSubmit={handleSubmit}
        pokemons={pokemons}
        random={random}
      />

      {!hint == true && <Footesr bigStreak={bigStreak} />}
    </>
  );
};

export default PokemonGuess;
