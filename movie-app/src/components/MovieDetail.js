import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieDetail.scss';

export default function MovieDetail(props) {
    const [movie, setMovie] = useState({
        id: 0,
        img: '',
        language: '',
        title: '',
        length: 0,
        overview: '',
        date: '',
    });
    const [isLoading, setIsLoading] = useState(true);

    // Component Lifecycle
    useEffect(() => {
        const id = props.match.params.id;

        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=5539be3a42f8533e3aa1c749481b4c63`
        )
            .then((res) => res.json())
            .then((movie) =>
                setMovie({
                    id: movie.id,
                    img: movie.poster_path,
                    language: movie.original_language,
                    title: movie.title,
                    length: movie.runtime,
                    overview: movie.overview,
                    date: movie.release_date,
                })
            );

        setIsLoading(false);
    });

    if (isLoading) {
        return <p>Loading...</p>;
    } else {
        return (
            <div className="movie-detail">
                <div className="movie-img">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.img}`}
                        alt={movie.title}
                    />
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <small>
                        {movie.date}
                        <span className="movie-lang">{movie.language}</span>
                    </small>
                    <p>Duration: {movie.length} mins</p>

                    <p className="movie-overview">{movie.overview}</p>
                    <Link to="/">
                        <a>&lt;&lt; Back To Home Page</a>
                    </Link>
                </div>
            </div>
        );
    }
}
