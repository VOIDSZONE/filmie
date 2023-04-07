import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './moviesListStyles';
import { Movie } from '../route';

function MoviesList({ movies }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
}

export default MoviesList;
