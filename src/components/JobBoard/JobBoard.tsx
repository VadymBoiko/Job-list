import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import { IVacancy } from "../../data/data";
import axios, { AxiosError } from "axios";

interface JobBoardProps {
  jobCards: IVacancy[];
}

export const JobBoard = ({ jobCards }: JobBoardProps) => {
  return (
    <main>
      <div className="flex flex-col container px-[9px] mx-auto lg:px-0 lg:py-6 lg:w-[1400px] lg:gap-2">
        {jobCards.map((item) => (
          <JobCard item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};
