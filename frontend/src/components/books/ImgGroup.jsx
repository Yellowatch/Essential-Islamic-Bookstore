// ImgGroup.jsx
import React, {Component} from 'react';
import Slider from "react-slick";
import './ImgGroup.css';

export default class ImgGroup extends Component {
    render() {
        const { images } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        };
        return (
            <div>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <img src={image} key={index} />
                    ))}
                </Slider>
            </div>
        );
    }
}