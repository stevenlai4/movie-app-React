import React, { Component } from 'react';

export default class MovieItem extends Component {
    render() {
        return (
            <div className="col mb-4">
                <div className="card">
                    <img
                        src={this.props.img}
                        className="card-img-top"
                        alt={this.props.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <p className="card-text">
                            Release Date: {this.props.date}
                        </p>
                        <a href="#" className="btn btn-primary">
                            More Info
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
