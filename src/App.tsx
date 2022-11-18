import React, { useEffect, useState } from "react";
import { IVacancy } from "./data/data";
import axios, { AxiosError } from "axios";
import "./App.css";
import { JobBoard } from "./components/JobBoard/JobBoard";
import { JobDetails } from "./components/JobDetails/JobDetails";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const apiUrl: string =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
  const token = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

  const [jobCards, setJobCards] = useState<IVacancy[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchJobCard() {
    try {
      setError("");
      const response = await axios.get<IVacancy[]>(apiUrl, {
        headers: { Authorization: `Bearer ${token} ` },
      });
      setJobCards(response.data);
      setLoading(true);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(true);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchJobCard();
  }, []);

  return (
    <div className="App">
      {error && (
        <div className="flex items-center justify-center h-[100vh]">
          <h1 className="text-3xl text-red-600">{error}</h1>
        </div>
      )}
      {loading ? (
        <Routes>
          <Route path="*" element={<Navigate to="cards" />} />
          <Route path="/" element={<Navigate to="cards" />} />
          <Route path="cards" element={<JobBoard jobCards={jobCards}/>} />
          {jobCards.map((card) => {
            return (
              <Route
                key={card.id}
                path={`/card-${card.id}`}
                element={
                  <JobDetails
                    address={card.address}
                    benefits={card.benefits}
                    description={card.description}
                    email={card.email}
                    employment_type={card.employment_type}
                    id={card.id}
                    location={card.location}
                    name={card.name}
                    phone={card.phone}
                    pictures={card.pictures}
                    salary={card.salary}
                    title={card.title}
                    updatedAt={card.updatedAt}
                    createdAt={card.createdAt}
                  />
                }
              />
            );
          })}
        </Routes>
      ) : (
        <div className="flex items-center justify-center h-[100vh]">
          <h1 className="text-3xl">Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
