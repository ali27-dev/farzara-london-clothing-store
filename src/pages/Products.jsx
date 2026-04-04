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

// ...existing code...

function Products() {
  return <h1>Products</h1>;
}

export default Products;
