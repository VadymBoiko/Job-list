import React from 'react'
import {ReactComponent as ArrowLeftSVG} from '../icons/Arrow left.svg';

export const ArrowLeft = ({prevPage}) => {
  return (
    <button className='hover:text-[#55699E] cursor-pointer' onClick={prevPage}><ArrowLeftSVG/></button>
  )
}
