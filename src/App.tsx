import { JobBoard } from "./components/JobBoard/JobBoard";
import { JobDetails } from "./components/JobDetails/JobDetails";
import { Navigate, Route, Routes } from "react-router-dom";
import { useJobCards } from "./hooks/UseJobCards";
import Missing from "./components/JobDetails/Missing";

function App() {
  const { jobCards } = useJobCards();

  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Navigate to="cards" />} />
        <Route path="/cards" element={<JobBoard jobCards={jobCards} />}/>
        <Route path="/cards/:id" element={<JobDetails/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
    </div>
  );
}

export default App;
