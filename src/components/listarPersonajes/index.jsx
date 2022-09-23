import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./personajes.module.css";

function ListarPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  // aaa
  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters?limit=25&offset=0")
      .then((response) => response.json())
      .then((data) => setPersonajes(data));
  }, []);
  return (
    <div className={styles.personajes}>
      {personajes.map((personaje) => {
        return (
          <div className={styles.personaje} key={personaje.id}>
            <h4 className={styles.title}>{personaje.nickname}</h4>

            <p>Occupation:</p>
            <p className={styles.info}>{personaje.occupation[0].substr(0, 15)}</p>

            <p>Status:</p>
            <p className={styles.info}>{personaje.status}</p>
            {/* <Image
      src={personaje.img}
      alt="Picture of the author"
      width={500}
      height={500}
    /> */}
          </div>
        );
      })}
    </div>
  );
}

export default ListarPersonajes;
