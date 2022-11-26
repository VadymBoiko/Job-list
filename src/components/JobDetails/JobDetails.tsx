import { Share } from "../../utilities/Share";
import { MarkStar } from "../../utilities/MarkStar";
import { Button } from "./ButtonApply";
import { Salary } from "../../utilities/Salary";
import { Description } from "../../utilities/Description";
import { AttachedImages } from "./AttachedImages/AttachedImages";
import { AdditionInfo } from "./additionInfo/AdditionInfo";
import { Contacts } from "./Contact/Contacts";
import { DateCalculation } from "../../utilities/DateCalculation";
import { Bookmark } from "../../utilities/Bookmark";
import { ButtonReturn } from "./ButtonReturn";
import { useParams } from "react-router-dom";
import styles from "./jobDetails.module.css";
import { useJobCards } from "../../hooks/UseJobCards";
import { jobList } from "../../data/data";
import { useMediaQuery } from "react-responsive";

export const JobDetails: React.FC = () => {
  // const { jobCards } = useJobCards();

  const { id } = useParams();
  const card = jobList.find((card) => card.id.toString() === id);

  const isDesktop = useMediaQuery({ query: "(min-width: 1920px)" });
  const isMobile = useMediaQuery({ query: "min-width: 414px)" });

  return (
    <main>
      <section>
        {card && (
          <div className={styles.container}>
            <div className="lg:w-[774px] lg:mr-[131px]">
              {isMobile && (
                <div>
                  <h1>Job Details</h1>
                  <hr />
                  <div className="flex mt-6 mb-[34px]">
                    <MarkStar />
                    <Share />
                  </div>
                </div>
              )}
              {isDesktop && (
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
                <h2 className={styles.title_text}>{card.title}</h2>
                <div className={styles.title_additional_wrapper}>
                  <p className={styles.title_additional_text}>
                    Brutto, per yeaer
                  </p>
                  <p className={styles.title_additional_salary}>
                    € {Salary(card.salary)}
                  </p>
                </div>
              </div>
              <div>
                <div className={styles.description}>
                  <div className={styles.post_date}>
                    {DateCalculation(card.updatedAt)}
                  </div>
                  {Description(card.description)}
                </div>
              </div>
              <Button />
              <div className="flex flex-col lg:flex-col-reverse">
                <AttachedImages pictures={card.pictures} />
                <AdditionInfo
                  benefits={card.benefits}
                  employment_type={card.employment_type}
                />
                {isDesktop && <ButtonReturn />}
              </div>
            </div>
            <div>
              <Contacts
                name={card.name}
                address={card.address}
                email={card.email}
                phone={card.phone}
                location={card.location}
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
