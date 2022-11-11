import React from 'react'
import { StartEmpty } from '../icons/StartEmpty'
import {Share} from '../icons/Share';
import {jobs} from '../data/data'
import moment from 'moment'

interface VacancyProps{

}

export const JobDetails = ({}:VacancyProps) => {

  const postData = moment(jobs.createdAt).fromNow();

  return (
    <main>
      <section >
        <div className='bg-white container sm lg'>
          <h1 className='text-darkness font-bold text-3xl mt-6'>Job Details</h1>
          <hr />
          <div className='flex'>
            <StartEmpty/>
            <Share/> 
          </div>
          <h2 className='text-darkness text-2xl'>{jobs.title}</h2>
          <div className='relative mt-1 mb-4'>
            <span className='absolute text-sm leading-5 left-4 top-3 text-lightness'>Posted {postData}</span>
            <p className='text-lightness text-lg leading-6 text-end'>Brutto, per yeaer</p>
            <p className='text-darkness text-xl leading-6 text-end font-bold'>{jobs.salary}</p>
          </div>
          <div className='mb-11'>
         
            <p className='text-lightness text-lg'>{jobs.description}</p>
          </div>
          <div > 
            <h3 className='text-darkness text-xl leading-6 font-bold'>Responsopilities</h3>
          </div>
          <div > 
            <h3 className='text-darkness text-xl leading-6 font-bold'>Compensation & Benefits</h3>
          </div>
        </div>
      </section>
    </main>
  )
}
