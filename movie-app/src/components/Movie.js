import React, { Component } from 'react';
import MovieItem from './MovieItem';

export default class Movie extends Component {
    render() {
        return (
            <div class="container mt-5">
                <div className="row row-cols-4">
                    <MovieItem
                        img="movie-img/aquaman.jpeg"
                        name="Aquaman"
                        date="12/21/2019"
                    />
                    <MovieItem
                        img="movie-img/avengers-end-game.jpg"
                        name="Avengers: Endgame"
                        date="04/26/2019"
                    />
                    <MovieItem
                        img="movie-img/black-panther.jpg"
                        name="Black Panther"
                        date="02/16/2018"
                    />
                    <MovieItem
                        img="movie-img/fast-and-furious-8.jpeg"
                        name="Fast And Furious 8"
                        date="04/13/2019"
                    />
                    <MovieItem
                        img="movie-img/joker.jpg"
                        name="Joker"
                        date="10/30/2019"
                    />
                    <MovieItem
                        img="movie-img/mulan.jpg"
                        name="Mulan"
                        date="09/04/2020"
                    />
                    <MovieItem
                        img="movie-img/skyscraper.jpg"
                        name="Skyscraper"
                        date="07/13/2020"
                    />
                    <MovieItem
                        img="movie-img/spiderman-far-from-home.jpg"
                        name="Spiderman: Far From Home"
                        date="08/21/2019"
                    />
                </div>
            </div>
        );
    }
}
