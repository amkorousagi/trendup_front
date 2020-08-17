import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Budget from './Budget';
import TotalCustomers from './TotalCustomers';

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

  return (
    <Page
      className={classes.root}
      title="Categories"
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
            <Budget />
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          
        </Grid>
          
      </Container>
    </Page>
  );
};

export default Trendup;
