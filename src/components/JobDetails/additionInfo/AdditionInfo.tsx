import React from "react";
import { IVacancy } from "../../../interfaces/interfaces";
import styles from "./AdditionInfo.module.css";
interface AdditionInfoProps {
  benefits: Array<string>;
  employment_type: Array<string>;
}

export const AdditionInfo: React.FC<AdditionInfoProps> = ({
  employment_type,
  benefits,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2>Addition Info</h2>
      <hr />
      <h4 className={styles.type_title}>Employment type</h4>
      <div className={styles.emp_type_wrapper}>
        {employment_type.map((type, i) => {
          return (
            <div key={i} className={styles.emp_type_block}>
              <p className={styles.emp_type_text}>{type}</p>
            </div>
          );
        })}
      </div>
      <h4 className={styles.benefit_title}>Benefits</h4>
      <div className={styles.benefit_wrapper}>
        {benefits.map((benefit, i) => {
          return (
            <div className={styles.benefit_block} key={i}>
              <p className={styles.benefit_text}>{benefit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
