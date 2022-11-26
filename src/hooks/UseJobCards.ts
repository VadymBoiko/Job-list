import axios, {AxiosError} from 'axios';
import {useEffect, useState} from 'react';
import { IVacancy } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';



export function useJobCards(){

  const apiUrl: string =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
  const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  const [jobCards, setJobCards] = useState<IVacancy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function fetchJobCards() {
    try {
      setError("");
      const response = await axios.get<IVacancy[]>(apiUrl, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      setJobCards(response.data);
      setLoading(true);
      navigate('/');
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(true);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchJobCards();
  }, []);

    return{jobCards,error,loading, setJobCards}
}