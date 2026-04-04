import styled from "styled-components";
import { ArrowRight } from "lucide-react";

const StyleCTAButton = styled.button`
  width: 24rem;
  background-color: var(--color-grey-900); /* replaces #1a1a1a */
  color: var(--color-grey-0); /* replaces #fff */
  border: none;
  border-radius: 1.2rem;
  padding: 1.2rem 2.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: var(--color-brand-600); /* replaces #bcac76 */
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
    svg {
      transform: translateX(5px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    width: 100%;
    justify-content: center;
  }
`;

function ButtonCTA() {
  return (
    <StyleCTAButton>
      Explore Collection <ArrowRight size={18} />
    </StyleCTAButton>
  );
}

export default ButtonCTA;
