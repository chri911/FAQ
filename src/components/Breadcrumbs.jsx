import React from 'react';
import {Breadcrumbs as MUIBreadcrumbs, makeStyles, Typography, Link} from '@material-ui/core';
import { withRouter } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '100px',
  },
  link: {
    color: '#2f66e3',
    cursor: 'pointer'
  }
}));

const Breadcrumbs = ({history, location} ) => {
  const classes = useStyles();
  const {pathname} = location;
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" className={classes.root}>
      {pathnames.length > 0
        ? <Link onClick={() => history.push("/")} className={classes.link}>
            Home
          </Link>
        : <Typography>Home</Typography>
      }
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast  
          ? <Typography>{name}</Typography>
          : <Link key={name} color="inherit" onClick={() => history.push(routeTo)}>
              {name}
            </Link>
      })}

    </MUIBreadcrumbs>
  );
}

export default withRouter(Breadcrumbs);