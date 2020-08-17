import React from 'react';
import {Link} from "react-router-dom";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  Button
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MapIcon from '@material-ui/icons/CategoryOutlined'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Service0 = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid
            item
           >
            <Button>
            <Link to={"/clothes/category"}>
              <Typography
              color="textPrimary"
              gutterBottom
              variant="h1"
            >
              Trend Category
            </Typography>

              </Link>
            </Button>
            
            
            
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MapIcon />
            </Avatar>
          </Grid>
        </Grid>
       
      </CardContent>
    </Card>
  );
};

Service0.propTypes = {
  className: PropTypes.string
};

export default Service0;
