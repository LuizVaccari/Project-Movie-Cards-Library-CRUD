import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <div>Movie Card Library CRUD</div>
      <Router>
        <Switch>
          <Route path="/" exact component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// Código da rota NotFound baseada em:
// https://ultimatecourses.com/blog/react-router-not-found-component

// Requisitos realizados com a ajuda dos vídeos:
// https://trybecourse.slack.com/files/U01B5LANGE7/F01LU9DB7NU/zoom_0.mp4
// https://www.youtube.com/watch?v=e3hL0eMcFW4
