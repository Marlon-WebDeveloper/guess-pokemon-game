import { ReactElement } from 'react'

type PropsHeader = {
  name: string | null,
  logo: string | null,
  streak:  number,
  hearts:number
  hintsQty:number
}

export const Header = ({name,logo,streak,hearts,hintsQty}: PropsHeader):ReactElement => {
  return (
    <nav className="flex w-screen pt-20 pr-8  mb-10 pl-2 h-[90px] items-center justify-between">
      <div className="flex flex-col justify-between ml-10">
        <div className="flex items-center h-11 mt-1">
          <h3 className="font-extrabold text-md text-white capitalize">
            {name}
          </h3>
          <i className={`foto nes-${logo} -ml-8`}></i>
        </div>

        <div className="flex items-center m-0 mt-2">
          <h5 className="text-white text-md m-0">Hearts: </h5>
          {hearts === 3 && ( 
            <>
              <i className="nes-icon heart is-small"></i>
              <i className="nes-icon heart is-small"></i>
              <i className="nes-icon heart is-small"></i>
            </>
          )}
          {hearts === 2 && (
            <>
              <i className="nes-icon heart is-small"></i>
              <i className="nes-icon heart is-small"></i>
              <i className="nes-icon is-smallparent is-small is-transparent heart"></i>
            </>
          )}
          {hearts === 1 && (
            <>
              <i className="nes-icon heart is-small"></i>
              <i className="nes-icon is-smallparent heart is-transparent is-small"></i>
              <i className="nes-icon is-smallparent heart is-transparent is-small"></i>
            </>
          )}
          {hearts === 0 && (
            <>
              <i className="nes-icon is-smallparent heart is-transparent is-small"></i>
              <i className="nes-icon is-smallparent heart is-transparent is-small"></i>
              <i className="nes-icon is-smallparent heart is-transparent is-small"></i>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between mr-2">
        <div className="flex items-center text-white text-md h-12">
          Streak:
          <span className="text-green-400 flex ml-2 items-center scale-125">
            {streak}
            <i className="nes-icon star ml-1 mb-6"></i>{" "}
          </span>
        </div>
        <div className="text-md flex mt-2">
          <h4 className="text-white">
            Hints:
            {hintsQty == 0 && <i className="nes-icon close is-small"></i>}
            {hintsQty == 1 ? <i className="nes-icon coin is-small"></i> : ""}
            {hintsQty == 2 ? (
              <>
                <i className="nes-icon coin is-small"></i>
                <i className="nes-icon coin is-small"></i>
              </>
            ) : (
              ""
            )}
            {hintsQty == 3 ? (
              <>
                <i className="nes-icon coin is-small"></i>
                <i className="nes-icon coin is-small"></i>
                <i className="nes-icon coin is-small"></i>
              </>
            ) : (
              ""
            )}
          </h4>
        </div>
      </div>
    </nav>
  );
}
 