
export type Pokemon = {
  name: string;
  url: string;
};

type Props = {
    guess: boolean,
    random:number
    pokemons: Pokemon[]
}

const Pokemon = ({guess , random, pokemons}:Props) => {
  
  
const index = pokemons[random]?.url.split("/")[6];




  return (
    <img
      className={`w-[350px] h-[350px] poke ${guess ? "" : "p-0 brightness-0"}`}
      src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${
        index
      }.png?raw=true`}
      alt={"Pokemon"}
    />
  );
}

export default Pokemon