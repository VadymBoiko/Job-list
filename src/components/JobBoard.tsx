import React, { useEffect, useState } from 'react'
import { JobCard } from './JobCard';
import {IVacancy} from '../data/data'
import axios, {AxiosError} from 'axios';

export const JobBoard = () => {

  const [jobCards, setJobCards] = useState<IVacancy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 
  async function fetchJobCard() {
    try{
      setError('')
      const response = await axios.get<IVacancy[]>('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      setJobCards(response.data);
      setLoading(false);
    }catch(e:unknown){
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message)
    }
  }

  useEffect(() =>{
    fetchJobCard()
  }, [])

  return (
    <main>
      <div className="container mx-auto sm lg 2xl">
        {jobCards.map(item => (<JobCard item={item} key={item.id}/>))}
      </div>
    </main>
  );
}
