import React from 'react';
import HeroLeft from '../components/hero/HeroLeft';
import HeroRight from '../components/hero/HeroRight';

function Hero() {
    return (
        <section id="home" className="Hero px-4 sm:px-6 lg:px-8 w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 py-24 md:py-0 relative overflow-hidden">
            <HeroLeft />
            <HeroRight />
        </section>
    )
}

export default Hero;