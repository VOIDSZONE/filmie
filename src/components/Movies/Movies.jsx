import React, { useState } from 'react';
import { MoviesList } from '../route';
import { useGetMoviesQuery } from '../../services/TMDB';
import { useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from '@mui/material';

function Movies() {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
  });

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
