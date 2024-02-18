import  { ReactElement } from 'react'


type pops ={
  bigStreak : number
}


const Footesr = ({bigStreak}:pops):ReactElement => {
  
  
  return (
    <div className='m-0 mt-10 pb-3 flex justify-center w-screen absolute bottom-0'>
      <h3 className="text-white text-lg">
        Bigest Streak:
        <span className="text-nowrap">
          {bigStreak}
          <i className="nes-icon trophy ml-2"></i>
        </span>
      </h3>
    </div>
  );
}

export default Footesr