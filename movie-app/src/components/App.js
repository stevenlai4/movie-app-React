import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import Banner from './Banner';
import Movie from './Movie';
import Navigation from './Navigation';

function App() {
    const POPULAR_MOVIE_API =
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5539be3a42f8533e3aa1c749481b4c63&page=1';

    // State
    const [movies, setMovies] = useState({
        movies: [],
        isLoading: true,
    });

    // ComponentDidMount() - Request Popular Movie API
    useEffect(() => {
        fetch(POPULAR_MOVIE_API)
            .then((res) => res.json())
            .then((json) => {
                setMovies({
                    movies: json.results,
                    isLoading: false,
                });
            });
    }, []);

    if (movies.isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <Banner movies={movies.movies} />
                <Navigation />
                <Movie movies={movies.movies} />
            </div>
        );
    }
}

export default App;
