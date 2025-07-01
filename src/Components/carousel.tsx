import { useState } from 'react'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import "./carousel.css"

type Slide = {
    src: string
    alt: string
}

type CarouselProps = {
    data: Slide[]
}

export const Carousel = ({ data }: CarouselProps) => {

    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className='carousel'>
            <ArrowCircleLeftIcon className="arrow arrow-left" onClick={prevSlide}/>
            {data.map((item, idx) => {
                return (
                    <img 
                        src={item.src} 
                        alt={item.alt} 
                        key={idx} 
                        className={slide === idx ? "slide" : "slide-hidden"}/>
                );
            })}
            <ArrowCircleRightIcon className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button 
                            key={idx} 
                            onClick={() => setSlide(idx)} 
                            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                        ></button>
                    );
                })}
            </span>
        </div>
    )
}