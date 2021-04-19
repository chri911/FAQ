import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Header = () => {
  return (
    <header className='Header'>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid container item xs={4} justify="space-around">
          <Grid item xs={2}>
            <Link href="#">
              UTORG
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link href="#">
              <Typography variant="button">
                For merchant
              </Typography>
              
            </Link>
          </Grid>
            <Grid item xs={3}>
              <Link href="#">
                <Typography variant="button">
                  Buy crypto
                </Typography>
              </Link>
            </Grid>
        </Grid>
        <Grid container item xs={6} justify="flex-end">
        <Grid item xs={4}>
          <Button>
            Sign in
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="primary">
            Sign up for free
          </Button>
        </Grid>
        </Grid>
      
      </Grid>
    </header>
  )
};