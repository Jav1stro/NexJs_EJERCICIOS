import Head from "next/head";
import { Box, Container } from "@mui/material";

import { DashboardLayout } from "../../components/dashboard-layout";
// import fs from 'fs-extra'
import TrendingMovies from "../../components/listarPeliculas/TrendingMovies"

import styles from './trending.module.css'



const PersonajesBB =  () => {

    return (
        <>
          <Head>
            <title>Favourites | Material Kit</title>
          </Head>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mx:'auto',
              height: 'fit-content',
              width:'100%',
              textAlign:'center',
    
            }}
          >
            <h2 className={styles.title}>Trending Movies</h2>
            
            <TrendingMovies />
          </Box>
        </>
      );
    };
    PersonajesBB.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
    
    export default PersonajesBB;