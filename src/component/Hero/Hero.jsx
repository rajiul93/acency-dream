import React, { memo, useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import background from '../../assets/background.png';
import Art3 from '../../assets/header.json';
import HeroButton from '../Button/HeroButton';

// Memoized Lottie component to avoid unnecessary re-renders
const MemoizedLottie = memo(Lottie);

const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const lottieRef = useRef(null);

  // Lazy load Lottie animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '0px 0px 200px 0px', // Trigger when 200px before viewport
      }
    );

    if (lottieRef.current) {
      observer.observe(lottieRef.current);
    }

    return () => {
      if (lottieRef.current) {
        observer.unobserve(lottieRef.current);
      }
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Art3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="card rounded-none image-full">
      <figure className="rounded-none opacity-100">
        <img
          className="w-full max-h-[600px] rounded-none"
          src={background}
          alt="background"
          loading="lazy" // Lazy load the background image
        />
      </figure>
      <div className="card-body md:flex-row flex-col-reverse items-center max-w-6xl mx-auto gap-6">
        <div className="flex flex-col gap-6">
          <span className="text-xl md:text-5xl font-light italic text-gray-900">
            You have the <span className="text-info">Idea</span>
          </span>
          <h1 className="text-xl md:text-5xl font-semibold font-sans text-gray-900">
            We have the <span className="text-info">technology</span>
          </h1>
          <p className="text-sm md:text-2xl text-gray-900">
            Elevate Your Business with Expert Innovative Tech Solutions.
          </p>
          <HeroButton />
        </div>
        <div className="card-actions md:w-1/2 justify-end" ref={lottieRef}>
          {/* Lazy load Lottie animation */}
          {isInView ? (
            <MemoizedLottie options={defaultOptions} />
          ) : (
            <div style={{ height: '300px', backgroundColor: '#f0f0f0' }}>
              {/* Placeholder before Lottie is loaded */}
              Loading animation...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
