import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Banner.scss';

export default class Banner extends Component {
    render() {
        return (
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner-img/avengers-end-game.jpg"
                        alt="Avengers End Game"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner-img/maleficent.jpg"
                        alt="Black Panther"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="banner-img/joker.jpg"
                        alt="Joker"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}
