import { Share } from "../../utilities/Share";
import { MarkStar } from "../../utilities/MarkStar";
import { Button } from "./ButtonApply";
import styles from "./jobDetails.module.css";
import { Salary } from "../../utilities/Salary";
import { Description } from "../../utilities/Description";
import { AttachedImages } from "./AttachedImages/AttachedImages";
import { AdditionInfo } from "./additionInfo/AdditionInfo";
import { Contacts } from "./Contact/Contacts";
import { DateCalculation } from "../../utilities/DateCalculation";
import { Bookmark } from "../../utilities/Bookmark";
import { ButtonReturn } from "./ButtonReturn";

interface VacancyProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: Array<string>;
  location: {
    lat: number;
    long: number;
  };
  pictures: Array<string>;
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: Array<string>;
}

export const JobDetails = ({
  id,
  name,
  email,
  phone,
  title,
  salary,
  address,
  benefits,
  location,
  pictures,
  createdAt,
  updatedAt,
  description,
  employment_type,
}: VacancyProps) => {
  const windowInnerWidth = window.innerWidth;

  return (
    <main>
      <section>
        <div className={styles.container}>
          <div className="lg:w-[774px] lg:mr-[131px]">
            {windowInnerWidth < 1920 ? (
              <div>
                <h1>Job Details</h1>
                <hr />
                <div className="flex mt-6 mb-[34px]">
                  <MarkStar />
                  <Share />
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between">
                  <h1>Job Details</h1>
                  <div className="flex ">
                    <Bookmark className={styles.lgBookmark} />
                    <span className="ml-4">Save to my list</span>
                    <Share />
                  </div>
                </div>
                <hr className="mb-[39px]" />
                <Button />
              </div>
            )}
            <div className={styles.title_block}>
              <h2 className={styles.title_text}>{title}</h2>
              <div className={styles.title_additional_wrapper}>
                <p className={styles.title_additional_text}>
                  Brutto, per yeaer
                </p>
                <p className={styles.title_additional_salary}>
                  € {Salary(salary)}
                </p>
              </div>
            </div>
            <div className={styles.title_additional}>
              {DateCalculation(updatedAt)}
            </div>
            <div>
              <div className={styles.description}>
                {Description(description)}
              </div>
            </div>
            <Button />
            <div className="flex flex-col lg:flex-col-reverse">
              <AttachedImages 
                pictures={pictures} 
                />
              <AdditionInfo
                benefits={benefits}
                employment_type={employment_type}
              />
            </div>
          </div>
          <div>
            <Contacts
              name={name}
              address={address}
              email={email}
              phone={phone}
              location={location}
            />
          </div>
        </div>
        {windowInnerWidth < 1920 ? ('') : (<ButtonReturn />)}
      </section>
    </main>
  );
};
