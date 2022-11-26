import React from "react";
import { Location } from "../../../icons/Location";
import { useMediaQuery } from "react-responsive";
import styles from "./Contact.module.css";

interface ContactProps {
  name: string;
  address: string;
  phone: string;
  email: string;
  location: {
    lat: number;
    long: number;
  };
}

export const Contacts: React.FC<ContactProps> = ({
  name,
  address,
  phone,
  email,
  location,
}: ContactProps) => {
  const isMobile = useMediaQuery({ query: "min-width: 414px)" });

  return (
    <div>
      {isMobile &&  (
        <div>
          <h2>Contacts</h2>
          <hr />
        </div>
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
            <p className={styles.info_address}>{address}</p>
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
            src={`https://maps.googleapis.com/maps/api/staticmap?key=09XjjnY1Emm3Gvw0t1Y43wn8XxMJthY&center=${location.lat},${location.long}&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};
