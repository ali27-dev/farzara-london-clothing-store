import styled from "styled-components";
import { useState, useEffect, useRef, useMemo } from "react";
import { products } from "../../data/ProductsData";

import * as S from "./ProductCardStyles";

import ProductCard from "./ProductCard";
import Heading from "../../ui/Heading";
import FilterBar from "../../ui/FilterBar";
// ...existing imports...

const StyleProductContainer = styled.div`
  background-color: var(--color-grey-100);
  border-radius: var(--border-radius-lg);
  padding-bottom: 3.4rem;
`;
const ProductsHeader = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  padding: 2.5rem 5% 0 5%;
  text-align: center;
  animation: fadeSlideDown 1.2s cubic-bezier(0.4, 0, 0.2, 1);
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOpen, setSortOpen] = useState(false);
  const filterBarRef = useRef();

  // Close filter menu on outside click (mobile)
  useEffect(() => {
    if (!sortOpen) return;
    function handleClick(e) {
      if (filterBarRef.current && !filterBarRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [sortOpen]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    switch (activeFilter) {
      case "lowPrice":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "highPrice":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "winter":
        filtered = filtered.filter((p) =>
          (p.season || "").toLowerCase().includes("winter")
        );
        break;
      case "summer":
        filtered = filtered.filter((p) =>
          (p.season || "").toLowerCase().includes("summer")
        );
        break;
      case "featured":
        filtered = filtered.filter((p) => p.featured);
        break;
      case "bestSelling":
        filtered = filtered.filter((p) => p.bestSelling);
        break;
      default:
        break;
    }
    return filtered;
  }, [activeFilter]);

  const showMore = () => setVisibleCount((prev) => prev + 20);

  return (
    <StyleProductContainer>
      <ProductsHeader>
        <Heading style={{ marginBottom: "2.4rem" }} as="h1">
          Shop the Latest Arrivals
        </Heading>
        <Heading as="p">
          Discover our curated collection of luxury fashion, premium essentials,
          and exclusive seasonal pieces. Find your new favorites and elevate
          your wardrobe with FarZara's signature style.
        </Heading>
      </ProductsHeader>

      <FilterBar
        sortOpen={sortOpen}
        setSortOpen={setSortOpen}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filterBarRef={filterBarRef}
        setVisibleCount={setVisibleCount}
      />
      <S.ProductsGrid>
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
      {filteredProducts.length > visibleCount && (
        <SeeMoreBtn onClick={showMore}>See More Products</SeeMoreBtn>
      )}
    </StyleProductContainer>
  );
}

export default Products;
