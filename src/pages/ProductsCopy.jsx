import { useState } from "react";
import styled from "styled-components";
import Heading from "../ui/Heading";

// --- MOCK PRODUCTS DATA (replace with API/database in future) ---
const products = [
  {
    id: 1,
    name: "Classic Wool Coat",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    tag: "New Arrival",
  },
  {
    id: 2,
    name: "Minimalist Sneakers",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    tag: "Bestseller",
  },
  {
    id: 3,
    name: "Tailored Blazer",
    price: 179.99,
    image:
      "https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=600&q=80",
    tag: "Limited Edition",
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
    tag: "New Arrival",
  },
  {
    id: 5,
    name: "Leather Tote Bag",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    tag: "Bestseller",
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    tag: "Limited Edition",
  },
];

const ProductsSection = styled.section`
  padding: 3.5rem 0 4.5rem 0;
  background: #faf9f6;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 1.1rem;
  box-shadow: 0 2px 16px 0 rgba(191, 167, 122, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.18s;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 8px 32px 0 rgba(191, 167, 122, 0.13);
  }
`;

const ProductInfo = styled.div`
  padding: 1.2rem 1.1rem 1.7rem 1.1rem;
  width: 100%;
  text-align: center;
`;

const ProductName = styled.h3`
  font-size: 1.18rem;
  font-family: "Inter", "Roboto", Arial, sans-serif;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #181818;
`;

const ProductTag = styled.span`
  display: inline-block;
  background: #f5e7c5;
  color: #bfa77a;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 0.2rem 0.8rem;
  margin-bottom: 0.7rem;
`;

const ProductPrice = styled.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 500;
  margin-top: 0.6rem;
`;
const ProductImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f6f3;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid #f0e9df;
  transition: opacity 0.3s;
`;

const ImageNavBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #bfa77a;
  cursor: pointer;
  z-index: 2;
  transition: background 0.2s;
  &:hover {
    background: #f5e7c5;
  }
`;

const CartButton = styled.button`
  margin-top: 1.1rem;
  background: linear-gradient(90deg, #bfa77a 60%, #181818 100%);
  color: #fff;
  font-family: "Inter", "Roboto", Arial, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  border: none;
  border-radius: 0.6rem;
  padding: 0.6rem 1.6rem;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(191, 167, 122, 0.09);
  transition: background 0.18s, transform 0.18s;
  &:hover {
    background: linear-gradient(90deg, #181818 60%, #bfa77a 100%);
    color: #fffbe6;
    transform: scale(1.04);
  }
`;
// ...existing code...

function Products() {
  // Track which image is shown for each product
  const [imageIndexes, setImageIndexes] = useState(products.map(() => 0));

  // Add to cart handler (localStorage for now)
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  // Image navigation
  const handlePrevImage = (idx) => {
    setImageIndexes((prev) =>
      prev.map((i, j) =>
        j === idx
          ? (i - 1 + products[idx].image.length) % products[idx].image.length
          : i
      )
    );
  };
  const handleNextImage = (idx) => {
    setImageIndexes((prev) =>
      prev.map((i, j) => (j === idx ? (i + 1) % products[idx].image.length : i))
    );
  };

  return (
    <ProductsSection>
      <Heading
        as="h3"
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          fontFamily: "Playfair Display, serif",
          fontWeight: 700,
          fontSize: "2.3rem",
          color: "#181818",
        }}
      >
        Featured Products
      </Heading>
      <ProductsGrid>
        {products.map((product, idx) => (
          <ProductCard key={product.id}>
            <ProductImageWrapper>
              <a
                href={product.image[imageIndexes[idx]]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProductImage
                  src={product.image[imageIndexes[idx]]}
                  alt={product.name}
                />
              </a>
              {product.image.length > 1 && (
                <>
                  <ImageNavBtn
                    style={{ left: 8 }}
                    onClick={() => handlePrevImage(idx)}
                    aria-label="Previous image"
                  >
                    &#8592;
                  </ImageNavBtn>
                  <ImageNavBtn
                    style={{ right: 8 }}
                    onClick={() => handleNextImage(idx)}
                    aria-label="Next image"
                  >
                    &#8594;
                  </ImageNavBtn>
                </>
              )}
            </ProductImageWrapper>
            <ProductInfo>
              <ProductTag>{product.tag}</ProductTag>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <CartButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </CartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsSection>
  );
}

export default Products;
