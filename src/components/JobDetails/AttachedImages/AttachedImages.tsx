import React from "react";
import { IVacancy } from "../../../interfaces/interfaces";
import styles from './AttachedImages.module.css'
interface AttachedImagesProps {
  pictures: Array<string>;
}
export const AttachedImages = ({ pictures }: AttachedImagesProps) => {
  return (
    <div className={styles.attached_wrapper}>
      <h2>Attached images</h2>
      <hr />
      <div className={styles.images_wrapper}>
        {pictures.map((picture: string, i: number) => {
          return (
            <img
              className={styles.image}
              key={i}
              src={picture}
              alt={`im${i}`}
            />
          );
        })}
      </div>
    </div>
  );
};
