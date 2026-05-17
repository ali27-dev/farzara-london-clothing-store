import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Only images, each is a link to /products
const BANNER_IMAGES = [
  {
    id: 1,
    image:
      "https://www.chinyere.pk/cdn/shop/files/Web-banner-1920x700-Eid2.jpg?v=1778650820&width=1880",
  },
  {
    id: 2,
    image:
      "https://www.chinyere.pk/cdn/shop/files/Web_banner_1920x700_SU.jpg?v=1771412720&width=1880",
  },
  {
    id: 3,
    image:
      "https://www.chinyere.pk/cdn/shop/files/Web-banner-1920x700-Eid2.jpg?v=1778650820&width=1880",
  },
  {
    id: 4,
    image:
      "https://www.chinyere.pk/cdn/shop/files/Web_banner_1920x700_SU.jpg?v=1771412720&width=1880",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === BANNER_IMAGES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const next = () =>
    setCurrent((prev) => (prev === BANNER_IMAGES.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? BANNER_IMAGES.length - 1 : prev - 1));

  return (
    <BannerContainer>
      <ArrowBtn className="left" onClick={prev} aria-label="Previous Slide">
        ‹
      </ArrowBtn>
      <BannerWindow>
        {BANNER_IMAGES.map(
          (item, idx) =>
            idx === current && (
              <BannerSlide key={item.id}>
                <BannerImg
                  src={item.image}
                  alt={`Banner ${item.id}`}
                  onClick={() => navigate("/products")}
                  tabIndex={0}
                  role="button"
                  aria-label="Shop Products"
                />
              </BannerSlide>
            )
        )}
      </BannerWindow>
      <ArrowBtn className="right" onClick={next} aria-label="Next Slide">
        ›
      </ArrowBtn>
      <Dots>
        {BANNER_IMAGES.map((_, idx) => (
          <DotBtn
            key={idx}
            isActive={idx === current}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </Dots>
    </BannerContainer>
  );
};

export default HeroBanner;

// --- Styled Components ---

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 320px;
  max-height: 600px;
  background: #f6ebe1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 38vh;
    min-height: 180px;
    max-height: 320px;
  }
  @media (max-width: 600px) {
    height: 28vh;
    min-height: 120px;
    max-height: 200px;
  }
`;

const BannerWindow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const BannerSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.7s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1.03);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.8rem;
  box-shadow: 0 4px 24px rgba(191, 167, 122, 0.08);

  &:focus {
    outline: 2px solid #bcac76;
  }
`;

const ArrowBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #e2e2e2;
  color: #1a1a1a;
  font-size: 2rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #000;
    color: #fff;
    border-color: #000;
  }

  &.left {
    left: 18px;
  }
  &.right {
    right: 18px;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
    &.left {
      left: 6px;
    }
    &.right {
      right: 6px;
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

const DotBtn = styled.button`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid #000;
  background: ${(props) => (props.isActive ? "#000" : "transparent")};
  padding: 0;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #000;
  }
`;
