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

import Service0 from './Service0';
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(10),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

const Trendup = () => {
  const classes = useStyles();

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '10vw'
}
    const section = {
      height: "100%",
      paddingTop: 5,
      backgroundColor: "#fff"
    };
  return (
    <Page
      className={classes.root}
      title="Services"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={5}
        >
          <div style={ {padding: 20}}>
            <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            >
              
                <Service0/>
            </Grid>
          </div>
          <div style={ {padding: 20}}>
            <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            >

                <Service1/>
            </Grid>
          </div>
          <div style={ {padding: 20}}>
          <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
          >
            
              <Service2/>
          </Grid>
          </div>
          <div style={ {padding: 20}}>
          <Grid
          item
          lg={12}
          sm={12}
          xl={12}
          xs={12}
          >
           
              <Service3/>
          </Grid>
          </div>
        </Grid>
          
      </Container>
    </Page>
  );
};

export default Trendup;
