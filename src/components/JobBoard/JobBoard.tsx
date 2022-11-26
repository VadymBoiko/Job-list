import { useState } from "react";
import { JobCard } from "./JobCard";
import { IVacancy } from "../../interfaces/interfaces";
import { PageNav } from "./PageNav";
import { jobList } from "../../data/data";
import { useJobCards } from "../../hooks/UseJobCards";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";

interface JobBoardProps {
  jobCards: IVacancy[];
}

export const JobBoard: React.FC<JobBoardProps> = () => {
  // const { jobCards, error, loading } = useJobCards();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);

  const lastCardIndex = currentPage * cardPerPage;
  const firstCardIndex = lastCardIndex - cardPerPage;
  const currentCard = jobList.slice(firstCardIndex, lastCardIndex);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1)
  return (
    <main>
      {/* {!loading && <Loader />}
      {error && <ErrorMessage error={error} />} */}
      <div className="flex flex-col container px-[9px] mx-auto lg:px-0 lg:py-6 lg:w-[1400px] lg:gap-2">
        {currentCard.map((item) => (
          <JobCard item={item} key={item.id} />
        ))}
        <PageNav
          cardPerPage={cardPerPage}
          totalCards={jobList.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </main>
  );
};
