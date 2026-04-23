import styled, { keyframes } from "styled-components";

// Animation for the checkmark and text
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const SuccessWrapper = styled.section`
  padding: 8rem 5%;
  max-width: 80rem; /* Narrower for focus */
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconCircle = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: #ecfdf5; /* Soft success green */
  color: #10b981; /* Bold success green */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
  animation: ${scaleUp} 0.6s ease-out;
`;

export const HeaderSection = styled.div`
  margin-bottom: 4rem;
  animation: ${fadeInDown} 0.8s ease-out;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    color: var(--color-grey-900);
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--color-grey-500);
    line-height: 1.6;
    max-width: 50rem;
    margin: 0 auto;
  }
`;

export const OrderMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  background-color: var(--color-grey-50);
  padding: 3rem;
  border-radius: var(--border-radius-md);
  text-align: left;
  margin-bottom: 4rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaItem = styled.div`
  span {
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: var(--color-grey-400);
    letter-spacing: 1px;
    margin-bottom: 0.4rem;
  }
  strong {
    font-size: 1.5rem;
    color: var(--color-grey-800);
  }
`;

// --- PRODUCT SUMMARY STYLES ---
export const SummaryTitle = styled.h3`
  font-size: 1.8rem;
  text-align: left;
  width: 100%;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--color-grey-100);
  padding-bottom: 1rem;
`;

export const ItemList = styled.div`
  width: 100%;
  margin-bottom: 4rem;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-grey-50);

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemImage = styled.img`
  width: 7rem;
  height: 9rem;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
`;

export const ItemInfo = styled.div`
  flex: 1;
  text-align: left;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-grey-800);
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1.3rem;
    color: var(--color-grey-500);
  }
`;

export const ItemPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-grey-900);
`;

// --- ACTION BUTTONS ---
export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ActionBtn = styled.button`
  flex: 1;
  padding: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s ease;

  /* Primary Button (Continue Shopping) */
  ${(props) =>
    props.primary &&
    `
    background-color: var(--color-grey-900);
    color: white;
    &:hover {
      background-color: var(--color-brand-600);
      transform: translateY(-2px);
    }
  `}

  /* Secondary Button (View Orders) */
  ${(props) =>
    props.secondary &&
    `
    background-color: transparent;
    border: 1px solid var(--color-grey-200);
    color: var(--color-grey-800);
    &:hover {
      background-color: var(--color-grey-50);
      border-color: var(--color-grey-900);
    }
  `}
`;
