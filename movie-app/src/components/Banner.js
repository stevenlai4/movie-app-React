import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.scss';

function Banner({ movies }) {
    const getRandomIndex = () => {
        return Math.floor(Math.random() * 18);
    };

    const index = getRandomIndex();

    const bannerItems = movies.slice(index, index + 3).map((movie) => {
        return (
            <Carousel.Item className="bannerItem" key={movie.id}>
                <img
                    className=" bannerImg d-block w-100"
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <Carousel.Caption className="bannerText">
                    <h3 className="bannerTitle">{movie.title}</h3>
                    <p className="bannerOverview">{movie.overview}</p>
                    <button className="bannerButton d-block">More Info</button>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <Carousel className="banner d-none d-md-block">{bannerItems}</Carousel>
    );
}

export default Banner;
