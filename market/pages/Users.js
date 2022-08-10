import React from "react";
import styles from "../styles/Users.module.css";

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

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingcontainer}>
          <div className={styles.heading}>CURRENT USERS</div>
        </div>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th} colSpan={8}>
                  Name
                </th>
                <th className={styles.th} colSpan={8}>
                  description
                </th>
                <th className={styles.th} colSpan={8}>
                  username
                </th>
                <th className={styles.th} colSpan={8}>
                  Password
                </th>
                <th className={styles.th} colSpan={8}>
                  API Key
                </th>
                <th className={styles.th} colSpan={8}>
                  API Secret
                </th>
                <th className={styles.th} colSpan={8}>
                  Code
                </th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((item) => (
                <tr key={item._id}>
                  <td className={styles.td} colSpan={8}>
                    {item.name}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.description}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.username}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.password}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.apikey}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.apisecret}
                  </td>
                  <td className={styles.td} colSpan={8}>
                    {item.code}
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
