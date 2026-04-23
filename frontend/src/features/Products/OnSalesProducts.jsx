import React from "react";
import styled from "styled-components";
import { products } from "../../data/ProductsData";
import ProductCard from "./ProductCard";
import Heading from "../../ui/Heading";

const SalePage = () => {
  // Filter only items with a discount
  const saleItems = products.filter((p) => p.discount > 0);

  return (
    <Container>
      <SaleBanner>
        <Heading as="h1">Discover New Collections</Heading>
        <Heading style={{ marginTop: "1rem" }} as="p">
          UP TO 30% TO 50% OFF ON SELECTED ITEMS
        </Heading>
      </SaleBanner>

      <Grid>
        {saleItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 5%;
  max-width: 140rem;
  margin: 0 auto;
`;

const SaleBanner = styled.div`
  background-color: var(--color-brand-600); /* FarZara Red */
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  margin-bottom: 5rem;
  border-radius: var(--border-radius-sm);
  animation: fadeSlideDown 1.7s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeSlideDown {
    0% {
      opacity: 0;
      transform: translateY(-40px) scale(0.98);
    }
    60% {
      opacity: 0.7;
      transform: translateY(10px) scale(1.01);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default SalePage;
