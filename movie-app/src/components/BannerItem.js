import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/BannerItem.scss';

export default function BannerItem({ name, image }) {
    return (
        <Carousel.Item className="bannerItem">
            <img
                className=" bannerImg d-block w-100"
                src={`https://image.tmdb.org/t/p/w1280${image}`}
                alt={name}
            />
        </Carousel.Item>
    );
}
