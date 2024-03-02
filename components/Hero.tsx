"use client"
import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {

    const handleScroll = () => {
        
    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find , Book or Rent a car - Quick and Easily!
                </h1>
                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking process. Whether you’re traveling for business or leisure, we’ll make sure you have a hassle-free experience. 
                </p>
                <Button 
                    title = "Explore Cars"
                    containerStyles = "bg-primary-blue text-white rounded-full mt-10"
                    handleClick = { handleScroll }
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero1.png" alt = "hero" fill className='object-contain'/>
                </div>
                    <div
                        className='hero__image-overlay'
                    />
            </div>
        </div>
    )
}

export default Hero