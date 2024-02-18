import React, {
  Dispatch,
  FormEvent,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Pokemon from "./Pokemon";

export type PokemonType = {
  name: string;
  url: string;
};
type WinScreenProps = {
  loading: boolean;
  random: number;
  dificulty: string | null
  hint: boolean;
  pokemon: string;
  hintsQty: number;
  setHintsQty: Dispatch<React.SetStateAction<number>>;
  guess: boolean;
  timer: number;
  pokemons: PokemonType[];
  setLoading: Dispatch<SetStateAction<boolean>>;
  sethint: Dispatch<SetStateAction<boolean>>;
  setTimer: Dispatch<React.SetStateAction<number>>;
  setGuess: Dispatch<SetStateAction<boolean>>;
  setPokemon: Dispatch<React.SetStateAction<string>>;
  setRandom: Dispatch<React.SetStateAction<number>>;
  handleSubmit: (e: FormEvent) => void;
};
type PokeTypesProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const WinScreen = ({
  hint,
  random,
  loading,
  handleSubmit,
  guess,
  setLoading,
  setRandom,
  setPokemon,
  setGuess,
  pokemons,
  pokemon,
  sethint,
  dificulty,
  setTimer,
  timer,
  hintsQty,
  setHintsQty,
}: WinScreenProps): ReactElement => {
  const [type, setType] = useState<PokeTypesProps[]>([]);
  let patch:string[] =[]
  const [namePathc, setNamePathc] = useState('');
  
  useEffect(() => {
    if (guess) {
      setType([]);
    }
  }, [guess]);
  useEffect(() => {
    pokemons[random]?.name.split("").map(letter => {
      if( Math.random() < 0.5){
        patch.push("_")
      } else {
        patch.push(letter.toLowerCase())
      }
      console.log(patch.join(""));
      
    })
  },[random, pokemons,guess,patch])

  return (
    <div>
      <main className="grid">
        <form
          className="grid place-content-center mt-8 mb-6"
          onSubmit={handleSubmit}
        >
          {guess || loading ? (
            <>
              <div className="h-[128px] text-center">
                <div
                  className={`nes-container no-r is-rounded text-center font-bold text-xl  text-black ${
                    loading ? "bg-slate-200" : "bg-[#a7d24f]"
                  }`}
                >
                  <p>{loading ? "Please Wait..." : "Correct Answer !"}</p>
                  {!loading && (
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        setLoading(true);
                        setRandom(Math.floor(Math.random() * pokemons.length));
                        setPokemon("");
                        setTimeout(() => {
                          setGuess(false);
                          setLoading(false);
                        }, 3000);
                      }}
                    >
                      <a className="nes-btn is-normal btns mt-2 ">
                        <span className="text-black">Play Again</span>
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="p-1 bg-[#212529] nes-field is-inline">
                  <input
                    type="text"
                    id="dark_field"
                    value={pokemon}
                    onChange={(e) => setPokemon(e.target.value)}
                    className="nes-input  is-rounded inputs is-success text-white"
                    placeholder="pokemon"
                    autoFocus={true}
                    required={true}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className="nes-btn mt-5 btns is-success"
                  onClick={handleSubmit}
                >
                  Guess
                </button>
                <button
                  type="button"
                  disabled={(hintsQty === 0 && true) || hint}
                  className={`nes-btn is-primary mt-5 ml-8 btns disabled:cursor-not-allowed`}
                  onClick={() => {
                    setHintsQty(hintsQty - 1);

                    fetch(
                      `https://pokeapi.co/api/v2/pokemon/${
                        pokemons[random].url.split("/")[6]
                      }`
                    )
                      .then((data) => data.json())
                      .then((data) => setType(data.types))
                      .then(() => sethint(true))
                      .then(() => {
                        const segundos = setInterval(() => {
                          setTimer((timer) => timer - 1);
                        }, 1000);

                        setTimeout(() => {
                          clearInterval(segundos);
                          sethint(false);
                          setType([]);
                          setTimer(10);
                          setNamePathc("");
                          patch = [];
                        }, 10000);
                        setNamePathc(patch.join(""));
                      });
                  }}
                >
                  Hint
                </button>
              </div>
            </>
          )}
          {loading ? (
            <div className="w-[400px] text-center grid place-content-center h-[400px]">
              <i className="nes-pokeball load"></i>
            </div>
          ) : (
            <article className="flex justify-center">
              <Pokemon guess={guess} random={random} pokemons={pokemons} />
            </article>
          )}
          {hint && type.length > 0 && (
            <>
              <div className="nes-container is-dark with-title  w-[360px] h-[120px]">
                <p className="title text-nowrap text-sm">
                  Remaining Time : {timer}
                </p>

                <div className="grid grid-cols-2 place-content-center items-center">
                  {type.length > 0 &&
                    type.map(({ slot, type }) => {
                      const { name } = type;
                      return (
                        <>
                          <a
                            key={slot}
                            className={`nes-btn bg-${name} hover:scale-110 transition
                          ${name == "poison" ? "bg-poison" : ""}
                         ${name == "water" ? "bg-water" : ""}
                         ${name == "grass" ? "bg-grass" : ""}
                         ${name == "ground" ? "bg-ground" : ""}
                         ${name == "electric" ? "bg-electric" : ""}
                         ${name == "dragon" ? "bg-dragon" : ""}
                         ${name == "rock" ? "bg-rock" : ""}
                         ${name == "normal" ? "bg-normal" : ""}
                         ${name == "ghost" ? "bg-ghost" : ""}
                         ${name == "dark" ? "bg-dark" : ""}
                         ${name == "fire" ? "bg-fire" : ""}
                         ${name == "steel" ? "bg-steel" : ""}
                         ${name == "fairy" ? "bg-fairy" : ""}
                         ${name == "ice" ? "bg-ice" : ""}
                         ${name == "fighting" ? "bg-fighting" : ""}
                         ${name == "flying" ? "bg-flying" : ""}
                         ${name == "bug" ? "bg-bug" : ""}`}
                          >
                            <h4 className="capitalize">{name}</h4>
                          </a>
                        </>
                      );
                    })}
                  <div className="w-full col-span-2 flex justify-center items-end gap-x-8">
                    {dificulty == "easy" && <p className="text-lg capitalize">{namePathc}</p>}
                  </div>
                  
                </div>
              </div>
            </>
          )}
        </form>
      </main>
    </div>
  );
};

export default WinScreen;
