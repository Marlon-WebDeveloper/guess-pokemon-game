import React, { Dispatch, ReactElement, SetStateAction, } from 'react'
import { Pokemon } from './PokemonGuess';

type PropsLoseScreen = {
  loading: boolean;
  hintsQty: number;
  setHintsQty: Dispatch<React.SetStateAction<number>>;
  random: number;
  pokemons: Pokemon[];
  hearts: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setLose: Dispatch<SetStateAction<boolean>>;
  setStreak: Dispatch<React.SetStateAction<number>>;
  setGuess: Dispatch<SetStateAction<boolean>>;
  setPokemon: Dispatch<React.SetStateAction<string>>;
  setHearts: Dispatch<React.SetStateAction<number>>;
  setRandom: Dispatch<React.SetStateAction<number>>;
};

const LoseScreen = ({loading,setLoading,hearts,setLose, setHintsQty , setHearts, setRandom, random, pokemons, setStreak , setPokemon, setGuess}:PropsLoseScreen):ReactElement => {

  return (
    <main className="w-full grid place-content-center">
      <div className="h-[128px] text-center">
        <div
          className={`nes-container is-rounded transition text-center font-bold text-lg text-white bg-red-500`}
        >
          <p>Oops You Lose</p>
          {!loading && (
            <>
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  if( hearts === 0){
                     setGuess(false);
                     setPokemon("");
                     setStreak(0);
                     setLose(false)
                     setHintsQty(3)
                     setHearts(3)
                  }
                  setLose(false);
                  setLoading(true);
                  setRandom(Math.floor(Math.random() * pokemons.length));
                  setPokemon("");
                  setStreak(0);
                  setTimeout(() => {
                    setGuess(false);
                    setLoading(false);
                  }, 3000);
                }}
              >
                <a className="nes-btn btns is-normal mt-1 ">
                  <span className="text-black">
                    {hearts === 0 ? "Start Over" : "Play Again"}
                  </span>
                </a>
              </button>
              <h2 className="text-sm mt-4 text-white capitalize tracking-widest">
                {pokemons[random].name}
              </h2>
            </>
          )}
        </div>
        <img
          className={`w-[350px] h-[350px] poke`}
          src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
            pokemons[random].url?.split("/")[6]
          }.png?raw=true`}
          alt={"Pokemon"}
        />
      </div>
    </main>
  );
}

export default LoseScreen