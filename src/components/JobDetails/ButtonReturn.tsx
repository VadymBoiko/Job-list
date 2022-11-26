import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '../../utilities/ArrowBack'

export const ButtonReturn = () => {
  return (
    <div className='absolute flex pl-[23px] py-4 pr-[26px] text-[#3A4562] cursor-pointer items-center bg-[#384564] bg-opacity-[0.14] rounded-lg text-xs bottom-[161px] left-[225px]'>
        <ArrowBack/>
        <Link to='/cards' className='ml-[19px] '>RETURN TO JOB BOARD</Link>
    </div>
  )
}
