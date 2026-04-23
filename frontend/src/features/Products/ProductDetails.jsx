import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { products } from "../../data/ProductsData";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import * as S from "./ProductDetailsStyles";
import Row from "../../ui/Row";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";

function ProductDetails() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === String(id));

  const [mainImg, setMainImg] = useState(product?.images?.[0] || "");
  if (!product) return <div>Product not found.</div>;
  return (
    <>
      <Row type="horizontal" style={{ marginBottom: "2rem" }}>
        <Heading as="h1">{product.name}</Heading>
        {product.isSoldOut && <S.SoldOutBadge>Sold Out</S.SoldOutBadge>}
        <ButtonText onClick={() => navigate("/products")}>
          &larr; Back
        </ButtonText>
      </Row>
      <S.Container>
        <S.ImagesCol>
          <S.MainImage src={mainImg} alt={product.name} />
          {product.images && product.images.length > 1 && (
            <S.ThumbsRow>
              {product.images.map((img, idx) => (
                <S.Thumb
                  key={img}
                  src={img}
                  alt={product.name + " thumb " + idx}
                  className={mainImg === img ? "active" : ""}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </S.ThumbsRow>
          )}
        </S.ImagesCol>
        <S.DetailsCol>
          <S.Title>
            {product.name}
            {product.isSoldOut && <S.SoldOutBadge>Sold Out</S.SoldOutBadge>}
          </S.Title>
          <S.Price>
            ${product.price}
            {product.discount > 0 && (
              <span
                style={{
                  color: "var(--color-grey-400)",
                  fontSize: "1.2rem",
                  textDecoration: "line-through",
                  marginLeft: 10,
                }}
              >
                ${Math.round(product.price / (1 - product.discount / 100))}
              </span>
            )}
          </S.Price>
          <S.Desc>{product.description}</S.Desc>
          <S.BtnRow>
            <S.CartBtn
              disabled={product.isSoldOut}
              title="Add to Cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </S.CartBtn>
            {/* <S.WishlistBtn onClick={() => navigate("/wishlist")}>
            <FaHeart /> Wishlist
            </S.WishlistBtn> */}
          </S.BtnRow>
          <S.Title>Product Details</S.Title>
          <S.StyledProductDetails>
            <S.StyledSpan>Article Name:</S.StyledSpan>{" "}
            <S.StyledProductDetailsItem>
              {product.name}
            </S.StyledProductDetailsItem>
            <S.StyledSpan>Color:</S.StyledSpan>{" "}
            <S.StyledProductDetailsItem>
              {product.color}
            </S.StyledProductDetailsItem>
            <S.StyledSpan>Fabric:</S.StyledSpan>{" "}
            <S.StyledProductDetailsItem>
              {product.fabric}
            </S.StyledProductDetailsItem>
            <S.StyledSpan>Pieces:</S.StyledSpan>{" "}
            <S.StyledProductDetailsItem>
              {product.description}
            </S.StyledProductDetailsItem>
          </S.StyledProductDetails>
        </S.DetailsCol>
      </S.Container>
    </>
  );
}

export default ProductDetails;
