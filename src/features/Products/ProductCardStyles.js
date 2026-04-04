import styled from "styled-components";

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  margin: 0 auto;
  padding: 0 5%;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Card = styled.div`
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-grey-100);

  /* CRITICAL FIX: Ensure the card doesn't grow too large */
  width: 100%;
  max-width: 32rem; /* Limits size to a professional width */
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* Professional vertical fashion ratio */
  aspect-ratio: 3 / 4;
  background-color: var(--color-grey-50);
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.5s ease, transform 0.6s ease;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  background-color: var(--color-brand-600);
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 1.1rem;
  font-weight: 700;
  z-index: 10;
  border-radius: var(--border-radius-tiny);
`;

export const WishlistBtn = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  z-index: 10;
  background: white;
  padding: 0.7rem;
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
  color: var(--color-grey-400);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-brand-600);
  }
`;

export const Info = styled.div`
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Category = styled.span`
  font-size: 1.1rem;
  color: var(--color-grey-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-800);
  /* Truncate text if the name is too long for the small card */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 0.4rem;
`;

export const CurrentPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;

export const OldPrice = styled.span`
  font-size: 1.3rem;
  color: var(--color-grey-400);
  text-decoration: line-through;
`;

export const AddToCartBtn = styled.button`
  width: 100%;
  background-color: var(--color-grey-900);
  color: white;
  padding: 1.4rem;
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  border-top: 1px solid var(--color-grey-100);

  &:hover {
    background-color: var(--color-brand-600);
  }
`;
