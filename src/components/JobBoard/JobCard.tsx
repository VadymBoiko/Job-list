import { IVacancy } from "../../interfaces/interfaces";
import { Location } from "../../icons/Location";
import { Link } from "react-router-dom";
import { Bookmark } from "../../utilities/Bookmark";
import { DateCalculation } from "../../utilities/DateCalculation";
import { StarRaiting } from "./StarRaiting";
import { useMediaQuery } from "react-responsive";
import styles from "./jobCards.module.css";

export interface VacancyProps {
  item: IVacancy;
}

export const JobCard:React.FC<VacancyProps> = ({ item }) => {


  const isDesktop = useMediaQuery({ query: "(min-width: 1920px)" });

  return (
    <section >
      <div className={styles.wrapper}>
        <div className={styles.company_wrapper_img}>
          <img
            className="w-full h-full rounded-full"
            src={item.pictures[0]}
            alt={item.name}
          />
        </div>
        {isDesktop && <Bookmark className={styles.bookmark}/> }
        <div className={styles.company_upt_data}>
          {DateCalculation(item.updatedAt)}
        </div>
        <div className={styles.company_wrapper}>
          <div className="flex lg:ml-16">
            <StarRaiting/>
          </div>
          <div>
            <Link to={`/cards/${item.id}`} className={styles.company_title}>
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
