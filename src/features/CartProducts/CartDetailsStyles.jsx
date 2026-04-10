import styled from "styled-components";

export const StyledCartPage = styled.section`
  padding: 4rem 5%;
  max-width: 140rem;
  margin: 0 auto;
  background-color: #77777710; /* Light background for separation */
  border-radius: var(--border-radius-md);

  h1 {
    font-size: 3.2rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 38rem; /* Wide for items, fixed for summary */
  gap: 6rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* Stack on tablet/mobile */
    gap: 4rem;
  }
`;

export const ItemsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummarySection = styled.aside`
  position: sticky;
  top: 10rem; /* Sticky while scrolling items */
`;

export const EmptyCartContainer = styled.div`
  text-align: center;
  padding: 15rem 2rem;
  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.6rem;
    color: var(--color-grey-500);
    margin-bottom: 3rem;
  }
`;
