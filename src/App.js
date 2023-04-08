import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import useStyles from './useStyles';
import {
  Actors,
  Movies,
  MoviesInformation,
  Navbar,
  Profile,
} from './components/route';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolkit} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/movies/:id" element={<MoviesInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


