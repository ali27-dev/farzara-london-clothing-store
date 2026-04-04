import ProductCard from "../features/Products/ProductCard";
import { products } from "../data/ProductsData";
import * as S from "../features/Products/ProductCardStyles";
import Heading from "../ui/Heading";

import styled from "styled-components";
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

function Products() {
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductsGrid>
    </>
  );
}

export default Products;
