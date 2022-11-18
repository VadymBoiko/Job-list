import React from "react";
import { IVacancy } from "../../../data/data";
import { Location } from "../../../icons/Location";
import styles from './Contact.module.css'
interface ContactProps {
  name: IVacancy["name"];
  address: IVacancy["address"];
  phone: IVacancy["phone"];
  email: IVacancy["email"];
  location: IVacancy["location"];
}

export const Contacts = ({
  name,
  address,
  phone,
  email,
  location,
}: ContactProps) => {
  const windowInnerWidth = window.innerWidth;

  return (
    <div>
      {windowInnerWidth < 1920 ? (
        <div>
          <h2>Contacts</h2>
          <hr />
        </div>
      ) : (
        ""
      )}
      <div>
        <div className={styles.info_wrapper}>
          <div>
            <p className={styles.info_title}>
              Department name,
              <br />
              {name}
            </p>
          </div>
          <div className={styles.info_location_wrapper}>
            <Location />
            <p className={styles.info_address}>
              {address}
            </p>
          </div>
          <div className={styles.info_contact}>
            <p>{phone},</p>
            <p className="mb-0">{email}</p>
          </div>
        </div>
        <div>
          <iframe
            title={address}
            className={styles.map}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC409XjjnY1Emm3Gvw0t1Y43wn8XxMJthY&q=${location.lat},${location.long}&center=${location.lat},${location.long}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
