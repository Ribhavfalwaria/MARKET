import React from "react";
import styles from "../styles/Audit.module.css";

import { useEffect, useState } from "react";

export default function Audit() {
  const [apidata, setapidata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/partners")
      .then((response) => response.json())
      .then((data) => {
        setapidata(data);
      });
  }, []);

  console.log(apidata);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingcontainer}>
          <div className={styles.heading}>AUDIT</div>
          <div className={styles.heading1}>PARTNER NAME</div>
        </div>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Field</th>
                <th className={styles.th}>Old Value</th>
                <th className={styles.th}>New Value</th>

                <th className={styles.th} colSpan={8}>
                  Updated On
                </th>

                <th className={styles.th} colSpan={8}>
                  Updated By
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.td}>Name</td>
                <td className={styles.td}>Suresh</td>
                <td className={styles.td}>Mukesh</td>
                <td className={styles.td} colSpan={8}>
                  12 december 2021
                </td>
                <td className={styles.td} colSpan={8}>
                  12 January 2021
                </td>
              </tr>
              {apidata.map((item) => (
                <tr>
                  <td className={styles.td}>{item.name}</td>
                  <td className={styles.td}>{item.description}</td>
                  <td className={styles.td}>{item.username}</td>
                  <td className={styles.td} colSpan={8}>
                    {item.password}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.apikey}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
