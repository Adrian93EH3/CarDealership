import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const photos3 = [
    {
        name: "slide1",
        url: "Cars/contact.jpg"
    },
    {
        name: "slide2",
        url: "../Cars/feedback2.jpg"  
    },
]


class SlideShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            className: "slides"
        }
        return (
            <div>
                <Slider {...settings}>
                    {photos3.map((photo) => {
                        return(
                            <div>
                                <img height="500px" width="100%" src={photo.url}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default SlideShow;