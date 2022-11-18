import React from 'react'
import {ReactComponent as ShareSVG} from '../icons/Shape icon.svg'
export const Share = () => {
  return (
    <div className='flex  ml-9'>
        <ShareSVG/>
        <span className='ml-3 text-[#38415D] text-base'>Share</span>
    </div>
  )
}
