import React from "react";
import { ArrowLeft } from "../../utilities/ArrowLeft";
import { ArrowRight } from "../../utilities/ArrowRight";

interface PageNavProps {
  cardPerPage: number;
  totalCards: number;
  paginate: (number:number) => void;
  nextPage: () => void,
  prevPage:() => void
}

export const PageNav: React.FC<PageNavProps> = ({
  cardPerPage,
  totalCards,
  paginate,
  nextPage,
  prevPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalCards / cardPerPage; i++) {
    pageNumbers.push(i);
  }


  return (
    <div
      className="w-[396px] h-10 flex justify-evenly items-center bg-[#F9FAFD] mx-auto
                     mt-[26px] mb-[17px] px-[18px] rounded-lg"
    >
      <ArrowLeft prevPage={prevPage}/>
      <div className="flex text-[rgba(56,65,93,0.602109)] tracking-[1.33333px] text-base leading-[19px] font-bold">
        {pageNumbers.map((number) => {
          return (
            <div
              key={number}
              onClick={() => paginate(number)}
              className="flex justify-center w-6 h-6 cursor-pointer"
            >
              {number}
            </div>
          );
        })}
      </div>
      <ArrowRight nextPage={nextPage}/>
    </div>
  );
};
