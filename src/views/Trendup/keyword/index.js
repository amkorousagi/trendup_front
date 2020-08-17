import React from 'react';
import {
  Container,
  Grid,
  Card,
  makeStyles,

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
  console.log("hello")
  return (
    <Page
    className={classes.root}
    title="TrendUp"
  >
    <Container maxWidth={false}>
      <Grid
        container
        spacing={5}
      >
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <Card
            minheight="200%"
          >
           {Parser(`<script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/2213_RC01/embed_loader.js"></script> <script type="text/javascript"> trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"남자 반바지","geo":"KR","time":"today 5-y"}],"category":0,"property":""}, {"exploreQuery":"date=today%205-y&geo=KR&q=%EB%82%A8%EC%9E%90%20%EB%B0%98%EB%B0%94%EC%A7%80","guestPath":"https://trends.google.com:443/trends/embed/"}); </script> `)}
          </Card>
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          xl={6}
          xs={12}
        >
          <Card>
            reee
          </Card>
        </Grid>
        {/*
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
        */}
      </Grid>
        
    </Container>
  </Page>
   
  );
};

export default Trendup;
