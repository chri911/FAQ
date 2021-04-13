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
        {/* </Grid> */}
          <Grid item xs={6} sm={2}>
            <Link href="#" color="inherit">
              UTORG
            </Link>
          </Grid>
          <Grid item xs={6} sm={2}>
          {/* <Typography> */}
            <Link href="#">
              For merchant
            </Link>
          </Grid>
            <Grid item xs={6} sm={2}>
              <Link href="#" color="inherit">
              Buy crypto
            </Link>
            </Grid>
            
          {/* </Typography> */}
        {/* </Grid> */}
        
        <Grid item xs={6} sm={3}>
          <Button>
            Sign in
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant="outlined" color="primary">
            Sign up for free
          </Button>
        </Grid>
      
      </Grid>
    </header>
  )
};