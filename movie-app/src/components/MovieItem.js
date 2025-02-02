import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieItem.scss';

export default class MovieItem extends Component {
    render() {
        return (
            <div className="col mb-4">
                <div className="card movie-item">
                    <img
                        src={this.props.img}
                        className="card-img-top"
                        alt={this.props.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title movie-title">
                            {this.props.name}
                        </h5>
                        <p className="card-text">
                            Release Date: {this.props.date}
                        </p>
                        <Link to={`/movies/${this.props.movieId}`}>
                            <button type="button" className="btn info-btn">
                                More Info
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
