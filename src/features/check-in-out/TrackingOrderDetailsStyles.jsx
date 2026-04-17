import styled from "styled-components";

export const TrackingContainer = styled.section`
  padding: 6rem 5%;
  max-width: 120rem;
  margin: 0 auto;
`;

export const TrackHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-grey-500);
    font-size: 1.6rem;
  }
`;

// --- STEPPER UI ---
export const StepperWrapper = styled.div`
  display: flex;
  justify-content: 间-between;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4rem;
    padding-left: 2rem;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

export const StepIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active
      ? "var(--color-brand-600)"
      : props.completed
      ? "#10b981"
      : "var(--color-grey-200)"};
  color: white;
  margin-bottom: 1rem;
  transition: all 0.4s ease;
  box-shadow: ${(props) =>
    props.active ? "0 0 15px rgba(var(--color-brand-600-rgb), 0.4)" : "none"};

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StepLabel = styled.div`
  text-align: center;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${(props) =>
      props.active || props.completed
        ? "var(--color-grey-900)"
        : "var(--color-grey-400)"};
  }

  span {
    font-size: 1.1rem;
    color: var(--color-grey-500);
  }
`;

// The connector line between steps
export const ProgressLine = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 10%;
  width: 80%;
  height: 3px;
  background-color: var(--color-grey-200);
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: #10b981;
    transition: width 0.8s ease-in-out;
  }

  @media (max-width: 768px) {
    left: 4.5rem;
    top: 0;
    width: 3px;
    height: 100%;

    &::after {
      width: 100%;
      height: ${(props) => props.progress}%;
    }
  }
`;

export const OrderDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background-color: var(--color-grey-50);
  padding: 3rem;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-100);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid var(--color-grey-200);
    padding-bottom: 1rem;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;

  span {
    color: var(--color-grey-500);
  }

  strong {
    color: var(--color-grey-900);
    text-align: right;
  }
`;

// --- MINI PRODUCT LIST STYLES ---
export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-100);
`;

export const Thumb = styled.img`
  width: 7rem;
  height: 9rem;
  object-fit: cover;
  border-radius: 4px;
`;

export const ItemMeta = styled.div`
  flex: 1;
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.3rem;
    color: var(--color-grey-500);
  }
`;
