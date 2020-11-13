import React from 'react';
import MovieItem from './MovieItem';

function Movie({ movies }) {
    // Create MovieItem component function
    const createMovieItem = (movie) => {
        return (
            <MovieItem
                key={movie.id}
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                name={movie.original_title}
                date={movie.release_date}
            />
        );
    };

    // Generate movie items
    return (
        <div className="container mt-5">
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
                {movies.map(createMovieItem)}
            </div>
        </div>
    );
}

export default Movie;
