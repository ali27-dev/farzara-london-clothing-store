import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";

const StyleCTAButton = styled.button`
  width: 24rem;
  background-color: #1a1a1a;
  color: #fff;
  border: none;
  border-radius: 1.2rem;
  padding: 1.2rem 2.8rem;
  font-size: 1.2rem;
  font-weight: 600;
  /* text-transform: uppercase; */
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
    background-color: #bcac76; /* FarZara Gold */
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
    <Link
      to="/products"
      style={{ textDecoration: "none", display: "inline-block" }}
    >
      <StyleCTAButton>
        Explore Collection <ArrowRight size={18} />
      </StyleCTAButton>
    </Link>
  );
}

export default ButtonCTA;
