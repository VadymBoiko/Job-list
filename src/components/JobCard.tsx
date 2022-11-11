import React from 'react';
import { IVacancy} from '../data/data';
import { Star } from '../icons/Star';
import {Location} from '../icons/Location'
import moment from 'moment';

export interface VacancyProps{
  item: IVacancy
}

export const JobCard = ({item}: VacancyProps) => {

  const postData = moment(item.createdAt).fromNow();
  return (
    <section id="job-item">
      <div className="flex bg-bgcard rounded-lg h-52 mt-2 mb-2 relative" >
        <div className="w-16 h-16 mt-16 ml-4">
          <img
            className="w-full h-full rounded-full"
            src={item.pictures[0]}
            alt={item.title}
          />
        </div>
        <span className='absolute text-sm leading-5 right-4 top-3 text-lightness'>Posted {postData}</span>
        <div className="flex flex-col w-72 mt-4 ml-5 ">
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h2 className='dark mt-4 text-lg leading-6 text-darkness'>{item.title}</h2>
          <p className='light mt-1 text-base text-lightness'>{item.name}</p>
          <div className='flex flex-row mt-2 mb-27' >
            <Location/>
            <span>{item.location.lat}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
