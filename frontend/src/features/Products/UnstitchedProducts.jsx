import React from "react";
import styled from "styled-components";
import { products } from "../../data/ProductsData";
import ProductCard from "./ProductCard";

const UnstitchedPage = () => {
  // Filter only Unstitched
  const unstitchedItems = products.filter((p) => p.category === "Unstitched");

  return (
    <Container>
      <Grid>
        {unstitchedItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 5%;
  max-width: 140rem;
  margin: 2.4rem auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export default UnstitchedPage;
