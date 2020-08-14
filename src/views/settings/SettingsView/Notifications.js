import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
  makeStyles,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Notifications = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    factor1: '',
    factor2: '',
    factor3: '',
    factor4: ''
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    //console.log(event.target.value)
    
  };
  const update = () => {
    //fetch update back url
    console.log(values)
    alert("updated")
  };

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Manage the factors' weight"
          title="The factors' weight"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                integer from 1 to 10
              </Typography>
              {/*
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Email"
              />
                */}
              <TextField
                fullWidth
                label="factor1"
                margin="normal"
                name="factor1"
                onChange={handleChange}
                type="password"
                value={values.factor1}
                variant="outlined"
              />
                <TextField
                fullWidth
                label="factor2"
                margin="normal"
                name="factor2"
                onChange={handleChange}
                type="password"
                value={values.factor2}
                variant="outlined"
              />
                <TextField
                fullWidth
                label="factor3"
                margin="normal"
                name="factor3"
                onChange={handleChange}
                type="password"
                value={values.factor3}
                variant="outlined"
              />
                <TextField
                fullWidth
                label="factor4"
                margin="normal"
                name="factor4"
                onChange={handleChange}
                type="password"
                value={values.factor4}
                variant="outlined"
              />
              {/*
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Push Notifications"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Text Messages"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Phone calls"
              />
                */}
            </Grid>
            {/*
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Messages
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Email"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Push Notifications"
              />
              <FormControlLabel
                control={(
                  <Checkbox defaultChecked />
                )}
                label="Phone calls"
              />
            </Grid>
                */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={update}
          >
            update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
