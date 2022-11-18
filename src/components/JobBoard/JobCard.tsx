import { IVacancy } from "../../data/data";
import { Star } from "../../icons/Star";
import { Location } from "../../icons/Location";
import { Link } from "react-router-dom";
import styles from "./jobCards.module.css";
import { Bookmark } from "../../utilities/Bookmark";
import { DateCalculation } from "../../utilities/DateCalculation";

export interface VacancyProps {
  item: IVacancy;
}

export const JobCard = ({ item }: VacancyProps) => {
  const windowInnerWidth = window.innerWidth;
  return (
    <section id="job-item">
      <div className={styles.wrapper}>
        <div className={styles.company_wrapper_img}>
          <img
            className="w-full h-full rounded-full"
            src={item.pictures[0]}
            alt={item.name}
          />
        </div>
        {windowInnerWidth === 1920 ?<Bookmark className={styles.bookmark}/>  : ''}
        <div className={styles.company_upt_data}>
          {DateCalculation(item.updatedAt)}
        </div>
        <div className={styles.company_wrapper}>
          <div className="flex mb-4 lg:ml-16">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div>
            <Link to={`/card-${item.id}`} className={styles.company_title}>
              {item.title}
            </Link>
            <p className={styles.company_name}>
              Departament name • {item.name}
            </p>
            <div className={styles.company_address_block}>
              <Location />
              <span className={styles.company_address}>{item.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
