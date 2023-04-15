import React from 'react';
import { MoviesList } from '../route';
import { useGetMoviesQuery } from '../../services/TMDB';

import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';

function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery({});

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" sx={{ bgcolor: '#D9008D' }} />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies found.
          <br />
          Please Search Something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return 'An error has occured.';
  }

  return (
    <div>
      <MoviesList movies={data} />
    </div>
  );
}

export default Movies;
