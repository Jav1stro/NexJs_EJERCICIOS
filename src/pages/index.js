import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import MovieList from '../components/listarPeliculas/MovieList'
import { DashboardLayout } from '../components/dashboard-layout';

const Home = () => (
  <>
    <Head>
      <title>
        INDEX | JAV10
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <MovieList />
      {/* <Container fixed>
        <Grid
          container
          spacing={3}
          // rowSpacing={10}
          // columnSpacing={1}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>

          <Grid
          item
          xs={12}
          lg={3}>
              <h1>Hola.</h1>
          </Grid>
          <Grid
          item
          xs={12}
          lg={8}>
           </Grid>
        </Grid>
      </Container> */}
    </Box>
  </>
);

Home.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Home;
