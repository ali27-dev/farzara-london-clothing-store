import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 5vw;
  display: flex;
  gap: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;
export const ImagesCol = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.07);
`;
export const ThumbsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;
export const Thumb = styled.img`
  width: 70px;
  height: 90px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.2s;
  &.active {
    border: 2px solid var(--color-brand-600);
  }
`;
export const DetailsCol = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--color-grey-900);
  margin-bottom: 0.5rem;
`;
export const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-brand-600);
`;
export const Desc = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  line-height: 1.7;
`;
export const BtnRow = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
export const CartBtn = styled.button`
  background: var(--color-brand-600);
  color: var(--color-grey-0);
  border: none;
  border-radius: 1.2rem;
  padding: 1.1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: var(--color-brand-700);
  }
  &:disabled {
    background: var(--color-grey-400);
    cursor: not-allowed;
  }
`;
export const WishlistBtn = styled.button`
  background: var(--color-grey-0);
  color: var(--color-brand-600);
  border: 2px solid var(--color-brand-600);
  border-radius: 1.2rem;
  padding: 1.1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.2s;
  &:hover {
    background: var(--color-brand-600);
    color: var(--color-grey-0);
  }
`;
export const SoldOutBadge = styled.span`
  display: inline-block;
  background: var(--color-grey-400);
  color: var(--color-grey-0);
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 0.7rem;
  padding: 0.6rem 1.2rem;
  margin-left: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.92;
`;

export const StyledProductDetails = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: auto 1fr;
  /* grid-template-rows: auto; */
  margin: 0 auto;
  gap: 1rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 600;
  color: var(--color-grey-800);
`;
export const StyledProductDetailsItem = styled.p`
  font-size: 1.3rem;
  color: var(--color-grey-800);
`;
