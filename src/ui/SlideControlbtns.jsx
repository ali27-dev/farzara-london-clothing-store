import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Optional: Manual Controls (Chevron arrows)
const StyleManualControls = styled.div`
  position: absolute;
  z-index: 30;
  display: flex;
  gap: 1rem;

  /* Desktop View: Bottom Right */
  bottom: 5%;
  right: 5%;

  @media (max-width: 768px) {
    /* Mobile View: Top Right (Away from the content box) */
    bottom: auto; /* Reset bottom */
    top: 5%; /* Move to top */
    right: 5%;
  }
`;
const ArrowBtn = styled.button`
  background: rgba(255, 255, 255, 0.7);
  border: none;
  color: var(--color-brand-600); /* icon color matches links/logo */
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(8px); /* Luxury glass effect */
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-brand-600); /* brand color on hover */
    color: var(--color-grey-0); /* icon turns white on hover */
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.9); /* More solid on tiny screens */
  }
`;
function SlideControlbtns({ nextSlide, prevSlide }) {
  return (
    <StyleManualControls>
      <ArrowBtn onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={20} />
      </ArrowBtn>
      <ArrowBtn onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={20} />
      </ArrowBtn>
    </StyleManualControls>
  );
}

export default SlideControlbtns;
