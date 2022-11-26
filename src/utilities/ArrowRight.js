import React from 'react'
import {ReactComponent as ArrowRightSVG} from '../icons/Arrow right.svg'
export const ArrowRight = ({nextPage}) => {
  return (
    <div className='hover:text-[#55699E] cursor-pointer' onClick={nextPage}><ArrowRightSVG/></div>
  )
}
