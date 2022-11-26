import React from 'react'
import {ReactComponent as MarkStarSVG} from '../icons/StarSave.svg'

export const MarkStar = () => {
  return (
    <div className='flex '>
        <MarkStarSVG/> 
        <span className='ml-3  text-[#38415D] text-base'>Save to my list</span>
    </div>
  )
}
