import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SlideControlbtns from "./SlideControlbtns";
import Heading from "./Heading";
import ButtonCTA from "./ButtonCTA";

// --- MOCK DATA (Future Database Structure) ---
const sliderImages = [
  {
    id: 1,
    // High-end editorial shot
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    title: "The London Collection",
    subtitle: "Autumn 2026",
  },
  {
    id: 2,
    // Modern streetwear/minimalist shot
    url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1920&auto=format&fit=crop",
    title: "Street Sartorial",
    subtitle: "Urban Essentials",
  },
  {
    id: 3,
    // Classic luxury/tailoring shot
    url: "https://images.unsplash.com/photo-1490481651871-ab68db25d43d?q=80&w=1920&auto=format&fit=crop",
    title: "Quiet Luxury",
    subtitle: "Premium Tailoring",
  },
  {
    id: 4,
    // Classic luxury/tailoring shot
    url: "/cabin-001.jpg",
    title: "Quiet Luxury",
    subtitle: "Premium Tailoring",
  },
];

// --- Styled Components ---
const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-bottom: 2.5rem;
  padding: 3.5rem 5% 1.5rem 5%;
  text-align: center;
  position: relative;
  z-index: 30;
  animation: fadeSlideDown 1.2s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
    padding: 2rem 5% 1rem 5%;
  }

  @keyframes fadeSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-40px) scale(0.98);
    }
    60% {
      opacity: 0.7;
      transform: translateY(10px) scale(1.01);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
const HeroTitle = styled.h1`
  font-family: "Playfair Display", "Merriweather", serif;
  font-size: 4.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-grey-900);
  margin: 0;
  line-height: 1.1;
  background: linear-gradient(
    90deg,
    var(--color-grey-900) 60%,
    var(--color-brand-600) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(191, 167, 122, 0.08));
  animation: fadeInTitle 1.5s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
  /* ...keyframes... */
`;
const HeroSubtext = styled.p`
  font-family: "Inter", "Roboto", Arial, sans-serif;
  font-size: 1.8rem;
  color: var(--color-grey-900);
  max-width: 68rem;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.92;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 0.7rem;
  padding: 1.1rem 2.2rem;
  box-shadow: 0 2px 16px 0 rgba(191, 167, 122, 0.07);
  animation: fadeInSubtext 1.5s 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
  /* ...keyframes... */

  @keyframes fadeInSubtext {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.98);
    }
    100% {
      opacity: 0.92;
      transform: translateY(0) scale(1);
    }
  }
`;

const SliderContainer = styled.section`
  height: 80vh; /* Consistent high-fashion height */
  width: 100%;
  position: relative; /* Needed for positioning slides and controls */
  overflow: hidden; /* Critical to hide the sliding images */
  border-radius: 1.5rem; /* Subtle rounding for a premium feel */
  margin-bottom: 3.8rem;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Transition handles the fade/slide effect */
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  /* Initial State: Hidden and slightly scaled up */
  opacity: 0;
  transform: scale(1.05);

  /* Dynamic State: Applied via props */
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transform: scale(1); /* Scale down to normal size when active for subtle movement */
    z-index: 10; /* Bring active slide to front */
  `}

  /* Dark overlay for text contrast */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.1)
    );
  }
`;

// Reuse ContentBox styles from the previous single Hero
const ContentBox = styled.div`
  position: absolute;
  bottom: 0; /* Align to the very bottom */
  left: 0;
  width: 100%; /* Full width strip */
  z-index: 20;

  /* Luxury Bottom Bar Styling */
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.7) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(10px); /* Premium blur effect */
  padding: 3rem 5%;
  display: flex;
  /* justify-content: space-between; Puts text on left, button on right */

  flex-direction: column;

  /* Animation: Slide up from bottom */
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease;
  opacity: 0;
  transform: translateY(100%);

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 2rem 5%;
    background: rgba(255, 255, 255, 0.95); /* Solid on mobile for readability */
  }
`;

// --- React Component with Logic ---

const HeroSlider = () => {
  // State to track the current active image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderImages.length;

  // Function to move to the next slide (handles looping)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Function to move to the previous slide (optional, for manual controls)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // --- AUTOMATION LOGIC (Every 4 Seconds) ---
  useEffect(() => {
    // 1. Start the interval timer
    const slideInterval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds

    // 2. CLEANUP FUNCTION (Crucial Professional Step)
    // This runs if the component unmounts, preventing memory leaks and console errors.
    return () => clearInterval(slideInterval);
  }, [currentIndex]); // Re-run effect if index changes (to reset the timer smoothly)

  /*
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios.get('/api/hero-slides').then(res => {
    //    setImages(res.data);
    //    setLoading(false);
    // });
  }, []);
  */
  return (
    <>
      <HeroHeader>
        <HeroTitle>Discover New Collections</HeroTitle>
        <HeroSubtext>
          Discover the latest in fashion and design — where timeless tailoring
          meets modern streetwear. Explore curated seasonal pieces crafted for
          quality and effortless style.
        </HeroSubtext>
      </HeroHeader>
      <SliderContainer>
        {/* Map through the images array (Future: map through API data) */}
        {sliderImages.map((slide, index) => (
          <React.Fragment key={slide.id}>
            {/* The background image slide */}
            <Slide
              style={{ backgroundImage: `url(${slide.url})` }}
              active={index === currentIndex}
            />

            {/* The text content box associated with this slide */}
            <ContentBox active={index === currentIndex}>
              <Heading as="h5">{slide.subtitle}</Heading>
              <Heading as="h4">{slide.title}</Heading>
              <ButtonCTA />
            </ContentBox>
          </React.Fragment>
        ))}

        {/* Optional: Manual controls for better UX */}
        <SlideControlbtns nextSlide={nextSlide} prevSlide={prevSlide} />
      </SliderContainer>
    </>
  );
};

export default HeroSlider;
