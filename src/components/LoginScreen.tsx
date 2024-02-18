import  { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router';


const LoginScreen = () => {
    const [name, setName] = useState<string>('')
    const [dificulty, setDificulty] = useState<'easy'|'hard'| ''|'medium'>('')
    const [logo, setLogo] = useState<string>('');
    
    const [gen, setGen] = useState("pokemon?limit=100000&offset=0");
    const navigate = useNavigate();
    
    
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        if (name === '' || name.length < 3) alert('Please enter a Name')
        if (dificulty === '') alert('Please select a dificulty')
        if ( logo === '') alert('Please select a logo')
        else{
            navigate(`/game?difculty=${dificulty}&&name=${name}&&logo=${logo}&&gen=${gen}`)
        }
        
        
    }
  return (
    <main className="w-screen h-screen bg-[#dc132b] grid place-content-center text-black">
      <section className=" shadow-xl pb-12  bg-[#ffffffee] px-8 pt-8 m-auto w-[400px] text-center flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-36 px-6">
          <h2 className="text-3xl leading-10 -ml-3">
            <span className="text-[#ff001d]">Welcome</span> Trainer{" "}
          </h2>
          <i className="nes-pokeball logo"></i>
        </div>
        <form className="mt-7 w-80" onSubmit={handleSubmit}>
          <div className="nes-field w-100 flex flex-col text-start">
            <label htmlFor="name_field">
              <span className="text-sm ml-1">Your nick</span>
            </label>
            <input
              type="text"
              id="name_field"
              autoFocus={true}
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="nes-input inputs bg-[#0e8de0] text-[#ffffff] placeholder:text-sm placeholder:text-zinc-300"
              placeholder={"ex. Ash"}
            />
          </div>
          <div className="mt-8 max-w-[200px]text-sm text-start">
            <h3 className="ml-2 text-sm">Select Logo</h3>
            <div className="grid grid-cols-5 -ml-1 gap-6 place-content-center w-[90%] h-[80px]">
              <button
                onClick={() => setLogo("charmander")}
                type="button"
                className={`logo foto2  ${
                  logo === "charmander" ? "selected after:w-[100px]" : ""
                }`}
              >
                <i className="nes-charmander"></i>
              </button>
              <button
                onClick={() => setLogo("squirtle")}
                type="button"
                className={`logo foto2 ${
                  logo === "squirtle" ? "selected after:w-[100px]" : ""
                }`}
              >
                <i className="nes-squirtle logo"></i>
              </button>
              <button
                onClick={() => setLogo("mario")}
                type="button"
                className={`logo foto2  ${
                  logo === "mario" ? "selected after:w-[90px] after:left-0" : ""
                }`}
              >
                <i className="nes-mario"></i>
              </button>
              <button
                onClick={() => setLogo("ash")}
                type="button"
                className={`logo foto2  ${
                  logo === "ash" ? "selected after:w-[90px] after:left-0" : ""
                }`}
              >
                <i className="nes-ash"></i>
              </button>

              <button
                onClick={() => setLogo("bulbasaur")}
                type="button"
                className={`logo foto2  ${
                  logo === "bulbasaur" ? "selected after:w-[100px]" : ""
                }`}
              >
                <i className="nes-bulbasaur"></i>
              </button>
            </div>

            <div>
              <div className="p-[1rem] grid grid-cols-1 mt-2">
                <h3 className="text-sm -ml-2">Select Generation</h3>
                <select
                  name="all"
                  className="text-xs w-[60%] text-white mt-4 nes-btn hover:bg-[#0e8de0] hover:opacity-90 hover:text-white btns h-[40px] bg-[#0e8de0] -ml-2 h-8 p-2"
                  onChange={(e) => setGen(e.target.value)}
                >
                  <option value="pokemon?limit=100000&offset=0">All</option>
                  <option value="1">First Gen</option>
                  <option value="2">Second Gen</option>
                  <option value="3">Third Gen</option>
                  <option value="4">Fourth Gen</option>
                  <option value="5">Fifth Gen</option>
                  <option value="6">Sixth Gen</option>
                  <option value="7">Seventh</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-4 text-start">
            <h3 className="ml-2 mb-2 text-sm">Select Dificulty</h3>
            <div className="flex mt-3 ml-2">
              <button
                className={`nes-btn btns text-xs is-success ${
                  dificulty === "easy" ? "button-s" : ""
                }`}
                onClick={() => setDificulty("easy")}
                type="button"
              >
                Easy
              </button>
              <button
                type="button"
                className={`nes-btn btns medium text-xs is-warning ml-6 ${
                  dificulty === "medium" ? "button-s" : ""
                }`}
                onClick={() => setDificulty("medium")}
              >
                Medium
              </button>
              <button
                type="button"
                className={`nes-btn btns text-xs is-error ml-6 ${
                  dificulty === "hard" ? "button-s" : ""
                }`}
                onClick={() => setDificulty("hard")}
              >
                Hard
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="nes-btn btns is-primary w-full mt-10"
          >
            Play
          </button>
        </form>
      </section>
    </main>
  );
}


export default LoginScreen