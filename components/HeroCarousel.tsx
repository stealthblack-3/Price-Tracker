"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
    {imgURL: "/assets/images/hero-1.svg", alt : 'Smartwatch'},
    {imgURL: "/assets/images/hero-2.svg", alt : 'Smartphone'},
    {imgURL: "/assets/images/hero-3.svg", alt : 'Laptop'},
    {imgURL: "/assets/images/hero-4.svg", alt : 'Monitor'},
    {imgURL: "/assets/images/hero-5.svg", alt : 'Chair'},
]

const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            interval={1500}
            showArrows={false}
        >
            {heroImages.map((image, index) => (
                <Image
                    key={index}
                    src={image.imgURL}
                    alt={image.alt}
                    width={484}
                    height={484}
                    className="object-contain"
                    priority
                />
            ))}
        </Carousel>

        <Image 
            src="assets/icons/hand-drawn-arrow.svg"
            alt='Arrow'
            width={175}
            height={175}
            className='max-xl:hidden absolute -left-[15%] bottom-0 z-0'
        />
    </div>
  )
}

export default HeroCarousel