import React from 'react';
import { Link as RouterLink} from 'react-router-dom';
import {Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: '100px',
    color: '#2f66e3',
    cursor: 'pointer',
    textAlign: "center",
    textDecoration: "none",
  }
}));

export const Homepage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h1">
        Home
      </Typography>

      <RouterLink to="/FAQ">
        <Typography variant="button" className={classes.link}>
          you might want to visit our FAQ page
        </Typography>
      </RouterLink>
    </>
  )
}