import styled from "styled-components";
import { useState } from "react";
import { products } from "../data/ProductsData";

import * as S from "../features/Products/ProductCardStyles";

import ProductCard from "../features/Products/ProductCard";
import Heading from "../ui/Heading";
// ...existing imports...

const ProductsHeader = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  padding: 2.5rem 5% 0 5%;
  text-align: center;
`;

const ProductsTitle = styled(Heading).attrs({ as: "h2" })`
  font-family: "Playfair Display", "Merriweather", serif;
  font-size: 3.8rem;
  font-weight: 800;
  color: var(--color-grey-900);
  letter-spacing: 0.5px;
  margin-bottom: 1.1rem;
  background: linear-gradient(
    90deg,
    var(--color-grey-900) 60%,
    var(--color-brand-600) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const ProductsSubtext = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-600);
  max-width: 48rem;
  margin: 0 auto 0.5rem auto;
  line-height: 1.6;
  font-family: "Inter", "Roboto", Arial, sans-serif;
  font-weight: 400;
  opacity: 0.92;
`;
const SeeMoreBtn = styled.button`
  display: block;
  margin: 3rem auto 0 auto;
  padding: 1.1rem 3.2rem;
  font-size: 1.15rem;
  font-weight: 700;
  border-radius: 1.2rem;
  border: 2px solid var(--color-brand-600);
  background: var(--color-grey-0);
  color: var(--color-brand-600);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px 0 rgba(191, 167, 122, 0.07);
  &:hover {
    background: var(--color-brand-600);
    color: var(--color-grey-0);
    box-shadow: 0 8px 32px 0 rgba(191, 167, 122, 0.13);
  }
`;

function Products() {
  const [visibleCount, setVisibleCount] = useState(20);
  const showMore = () => setVisibleCount((prev) => prev + 20);
  return (
    <>
      <ProductsHeader>
        <ProductsTitle>Shop the Latest Arrivals</ProductsTitle>
        <ProductsSubtext>
          Discover our curated collection of luxury fashion, premium essentials,
          and exclusive seasonal pieces. Find your new favorites and elevate
          your wardrobe with FarZara's signature style.
        </ProductsSubtext>
      </ProductsHeader>

      <S.ProductsGrid>
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
      {products.length > visibleCount && (
        <SeeMoreBtn onClick={showMore}>See More Products</SeeMoreBtn>
      )}
    </>
  );
}

export default Products;
