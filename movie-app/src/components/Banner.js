import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.scss';

function Banner({ movies }) {
    return (
        <Carousel className="banner">
            <Carousel.Item className="bannerItem">
                <img
                    className=" bannerImg d-block w-100"
                    src={`https://image.tmdb.org/t/p/w1280${movies[0].backdrop_path}`}
                    alt={movies[0].name}
                />
            </Carousel.Item>
            <Carousel.Item className="bannerItem">
                <img
                    className=" bannerImg d-block w-100"
                    src={`https://image.tmdb.org/t/p/w1280${movies[1].backdrop_path}`}
                    alt={movies[1].name}
                />
            </Carousel.Item>
            <Carousel.Item className="bannerItem">
                <img
                    className=" bannerImg d-block w-100"
                    src={`https://image.tmdb.org/t/p/w1280${movies[2].backdrop_path}`}
                    alt={movies[2].name}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;
