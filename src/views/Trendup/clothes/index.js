import React from 'react';
import {Link} from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  Container
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Trendup = () => {
  const classes = useStyles();

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '15vw'
}
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={5}
        >
          <Grid
          lg={4}
          sm={4}
          xl={4}
          xs={4}
          >
            <Card style={cardStyle}>
              <Link to={"/clothes/map"}>TrendMap</Link>
            </Card>
          </Grid>
          <Grid
          lg={4}
          sm={4}
          xl={4}
          xs={4}
          >
            <Card style={cardStyle}>
              <Link to={"/clothes/rank"}>TrendRank</Link>
            </Card>
          </Grid>
          <Grid
          lg={4}
          sm={4}
          xl={4}
          xs={4}
          >
            <Card style={cardStyle}>
              <Link to={"/clothes/future"}>TrendFuture</Link>
            </Card>
          </Grid>
        </Grid>
          {/*
        <Grid
          container
          spacing={3}
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
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit />
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
            <TrafficByDevice />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
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
        </Grid>
          */}
      </Container>
    </Page>
  );
};

export default Trendup;
