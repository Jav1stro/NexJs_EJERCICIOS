import Head from "next/head";
import { Box, Container } from "@mui/material";

import { DashboardLayout } from "../../components/dashboard-layout";
// import fs from 'fs-extra'
import ListarPersonajes from "../../components/listarPersonajes"

import styles from './personajes.module.css'



const PersonajesBB =  () => {

    return (
        <>
          <Head>
            <title>Search Filter | Material Kit</title>
          </Head>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mx:'auto',
              border: '2px solid rgb(245,199,26) ',
              height: 'fit-content',
              width:'100%',
              textAlign:'center',
    
            }}
          >
            <h2 className={styles.title}>Personajes de BREAKING BAD</h2>
            
            <ListarPersonajes />
          </Box>
        </>
      );
    };
    PersonajesBB.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
    
    export default PersonajesBB;