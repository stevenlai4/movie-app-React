import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import MovieItem from './MovieItem';
import '../styles/Movie.scss';

// Create MovieItem component function
const createMovieItem = (movie) => {
    return (
        <MovieItem
            key={movie.id}
            movieId={movie.id}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            name={movie.original_title}
            date={movie.release_date}
        />
    );
};

// Movie functional component
function Movie() {
    // Variables
    const categories = ['popular', 'now_playing', 'upcoming', 'top_rated'];

    // State
    const [movies, setMovies] = useState({
        movies: [],
        isLoading: true,
    });
    const [selectedCategory, setSelectedCategory] = useState('popular');

    var URL = `https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=5539be3a42f8533e3aa1c749481b4c63&page=1`;

    // Component Lifecycle
    useEffect(() => {
        console.log('Hi');
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setMovies({
                    movies: json.results,
                    isLoading: false,
                });
            });
    }, [URL]);

    const handleSetCategory = (selectedCategoryOption) => {
        setSelectedCategory(selectedCategoryOption.value);
    };

    // react-select options
    const options = categories.map((category) => {
        let label;

        switch (category) {
            case 'popular':
                label = 'Popular';
                break;
            case 'now_playing':
                label = 'Now Playing';
                break;
            case 'upcoming':
                label = 'Upcoming';
                break;
            case 'top_rated':
                label = 'Top Rated';
                break;
            default:
                label = '';
        }

        return {
            value: category,
            label,
        };
    });

    // Generate movie items
    if (movies.isLoading === true) {
        return <p> Loading...</p>;
    } else {
        return (
            <div className="movie container mt-5">
                <header>
                    <Select
                        className="category-selection"
                        options={options}
                        onChange={handleSetCategory}
                        defaultValue={{
                            value: selectedCategory,
                            label: 'Popular ',
                        }}
                    />
                </header>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-1">
                    {movies.movies.map(createMovieItem)}
                </div>
            </div>
        );
    }
}

export default Movie;
