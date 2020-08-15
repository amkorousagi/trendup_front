import React from 'react';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';
import {
  Container,
  Grid,
  makeStyles,
  Card
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

  let myGraph = {nodes:[{id:"n1", size:1, label:"alice"},{id:"n2", size: 1, label:"rabit"}, {id:"n3", size: 10, label:"me"}],
   edges:[{id:"e1", source:"n1", target:"n2", size:5}, {id:"e2", source:"n2", target:"n3", size:1}]}

   fetch('http://localhost:4000/node')
      .then(response => response.json())
      .then(data => myGraph["nodes"] = data.data.map(
        x => {
          return {
            id : x["channel_id"],
            size: 1,
            label: `${x["title"]}(${x["subscriber_count"]})`
          }
        }
      ))
   fetch('http://localhost:4000/edge')
      .then(response => response.json())
      .then(data => myGraph["edges"] = data.data.map(
        x => {
          return {
            id: `${x["source_id"]}${x["target_id"]}`,
            source: x["source_id"],
            target: x["target_id"],
            size: x["size"]
          }
        }
      ))
      .then(data => console.log(myGraph))
  
   
  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        {
         
        }

        <Card
          minHeight = "200%"
        >
          <Sigma
            graph={myGraph} settings={{drawEdges: true, clone: false,labelThreshold: true}}
            onClickNode={e=> console.log("clicked: ", e.data.node["label"])}
          >
            <RelativeSize initialSize={50}/>
            <RandomizeNodePositions/>
          </Sigma>
        </Card>
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
