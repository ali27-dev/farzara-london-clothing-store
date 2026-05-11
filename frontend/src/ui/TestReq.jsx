import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// ===== Styled Components =====

const Container = styled.div`
  padding: 40px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Name = styled.h3`
  margin: 10px 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: #0066ff;
`;

const Category = styled.p`
  font-size: 13px;
  color: #777;
`;

const Discount = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: #fff;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background: #0066ff;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0052cc;
  }
`;

// ===== Component =====

// const API = axios.create({
//   baseURL: "http://localhost:3002",
//   withCredentials: true,
// });

const TestReq = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetchProducts();
    axios
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const res = await API.get("/products");
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <Container>
      <Title>Our Products</Title>
      <p>Explore our exclusive range of products. {products.length} </p>
      <Grid>
        {products.map((product) => (
          <Card key={product._id}>
            <Image src={product.images[0]} alt={product.name} />
            <Name>{product.name}</Name>
            <Price>Rs. {product.price}</Price>
            <Category>{product.category}</Category>

            {product.discount > 0 && <Discount>-{product.discount}%</Discount>}

            <Button>Add to Cart</Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default TestReq;
