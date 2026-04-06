import styled from "styled-components";
import { useState, useEffect, useRef, useMemo } from "react";
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

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Lowest Price", value: "lowPrice" },
  { label: "Highest Price", value: "highPrice" },
  { label: "Winter", value: "winter" },
  { label: "Summer", value: "summer" },
  { label: "Pieces", value: "pieces" },
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "bestSelling" },
];

const FilterBarWrapper = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
`;
const SortToggleBtn = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-brand-600);
    color: var(--color-grey-0);
    border: none;
    border-radius: 1.2rem;
    padding: 0.7rem 1.7rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    margin: 0 auto 1rem auto;
    box-shadow: 0 2px 8px 0 rgba(191, 167, 122, 0.07);
  }
`;
const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
    padding: 1rem 5vw 1rem 5vw;
    background: var(--color-grey-0);
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.07);
    border-radius: 1.2rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 3.2rem;
    z-index: 1000;
    display: none;
    &.open {
      display: flex;
    }
  }
`;
const FilterBtn = styled.button`
  background: var(--color-grey-0);
  color: var(--color-brand-600);
  border: 2px solid var(--color-brand-600);
  border-radius: 1.2rem;
  padding: 0.7rem 1.7rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  &:hover,
  &.active {
    background: var(--color-brand-600);
    color: var(--color-grey-0);
  }
  @media (max-width: 600px) {
    padding: 0.7rem 1.2rem;
    font-size: 1.05rem;
    min-width: 100%;
    border-radius: 0.7rem;
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
      case "pieces":
        filtered = filtered.filter((p) =>
          (p.category || "").toLowerCase().includes("piece")
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
    <>
      <ProductsHeader>
        <ProductsTitle>Shop the Latest Arrivals</ProductsTitle>
        <ProductsSubtext>
          Discover our curated collection of luxury fashion, premium essentials,
          and exclusive seasonal pieces. Find your new favorites and elevate
          your wardrobe with FarZara's signature style.
        </ProductsSubtext>
      </ProductsHeader>

      <FilterBarWrapper>
        <SortToggleBtn onClick={() => setSortOpen((v) => !v)}>
          Sort & Filter
          <span aria-hidden>{sortOpen ? "▲" : "▼"}</span>
        </SortToggleBtn>
        <FilterBar
          ref={filterBarRef}
          className={sortOpen ? "open" : ""}
          onClick={() => setSortOpen(false)}
        >
          {FILTERS.map((f) => (
            <FilterBtn
              key={f.value}
              className={activeFilter === f.value ? "active" : ""}
              onClick={() => {
                setActiveFilter(f.value);
                setVisibleCount(20);
                setSortOpen(false);
              }}
            >
              {f.label}
            </FilterBtn>
          ))}
        </FilterBar>
      </FilterBarWrapper>
      <S.ProductsGrid>
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
      {filteredProducts.length > visibleCount && (
        <SeeMoreBtn onClick={showMore}>See More Products</SeeMoreBtn>
      )}
    </>
  );
}

export default Products;
