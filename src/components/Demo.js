import React, { useMemo, useState } from 'react'
import { getPrimeNumber } from '../utils/helpers';

const Demo = () => {

    const [isBackgroundBlack, setBackgroundBlack] = useState(false);
    const [num, setNum] = useState(2);

  const prime = useMemo(()=>getPrimeNumber(num), [num]);
  console.log('Renderring the Demo component....')

  return (
    <div className={'w-96 h-72 border border-black px-2 bg-gray-800' + (isBackgroundBlack && ' bg-gray-800')}>
        <button className='p-2 m-2 bg-green-400 rounded-sm' onClick={()=>setBackgroundBlack(!isBackgroundBlack)}>Toggle</button>
        <input className='border border-gray-500' type='number' value={num} onChange={(e)=>setNum(e.target.value)}></input>
        <span className='p-1 m-1'>{prime}</span>
    </div>
  )
}

export default Demo