import styled from "styled-components";

export const SummaryBox = styled.div`
  padding: 3rem 1.5rem;
  background: var(--color-grey-0);
  border-radius: var(--border-radius-md);
  border-top: 2px solid var(--color-grey-900);
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  letter-spacing: 1px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  &.total {
    border-top: 1px solid var(--color-grey-100);
    padding-top: 2rem;
    margin-top: 2rem;
    font-size: 1.8rem;
  }
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  padding: 1.8rem;
  background: #1a1a1a;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1.2rem;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;

export const ContinueBtn = styled.button`
  width: 100%;
  padding: 1.8rem;
  border: 1px solid var(--color-grey-200);
  text-transform: uppercase;
  font-weight: 700;
  transition: background 0.3s;
  &:hover {
    background: var(--color-grey-50);
  }
`;
