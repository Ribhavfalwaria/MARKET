import React from "react";
import styles from "./card.module.css";
export default function Card() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            src="https://static.india.com/wp-content/uploads/2016/10/hdfc-bank-logo_regular-2.jpg?impolicy=Medium_Resize&w=1200&h=800"
            alt="Girl in a jacket"
            width="145"
            height="110"
          />
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <br />
      </div>
    </div>
  );
}
