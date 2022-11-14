import Head from "next/head";
import { Box, Container } from "@mui/material";

import { DashboardLayout } from "../../components/dashboard-layout";
import { useState } from "react";
import styles from "./searchFilter.module.css";

const Customers = () => {
  const list = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"];

  const [filterList, setFilterList] = useState(list);

  

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValues = list.filter(
      (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <>
      <Head>
        <title>Search Filter | JAV10</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          mx:'auto',
          border: '2px solid rgb(245,199,26) ',
          height: 300,
          width:'100%',
          textAlign:'center',

        }}
      >
          <div>
            <div className= {styles.title}>
              Search filter
            </div>
            <input className={styles.input} name="query" type="text" onChange={handleSearch} />
            {filterList &&
              filterList.map((item, index) => (
                <div className={styles.item} key={index}>{item}</div> //Display each item
              ))}
          </div>
      </Box>
    </>
  );
};
Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Customers;
