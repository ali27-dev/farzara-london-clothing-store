import styled from "styled-components";

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 10rem;
  aspect-ratio: 3/4;
  object-fit: cover;
`;

export const TextDetails = styled.div`
  h4 {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .meta {
    font-size: 1.2rem;
    color: var(--color-grey-500);
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-grey-200);
  width: fit-content;

  button {
    padding: 0.8rem 1.2rem;
  }
  span {
    width: 3rem;
    text-align: center;
    font-size: 1.4rem;
  }
`;

export const PriceCol = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const TotalCol = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
export const QtyCol = styled.div`
  display: flex;
  justify-content: center;
`;
export const RemoveBtn = styled.button`
  color: var(--color-grey-400);
  transition: color 0.2s;
  &:hover {
    color: var(--color-brand-600);
  }
`;
