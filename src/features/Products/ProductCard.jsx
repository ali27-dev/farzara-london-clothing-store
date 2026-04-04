import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import * as S from "./ProductCardStyles";

const ProductCard = ({ product }) => {
  const { name, category, price, discount, images, season } = product;

  // High-performance hover state
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Math for FarZara pricing
  const hasDiscount = discount > 0;
  const salePrice = hasDiscount ? price - (price * discount) / 100 : price;

  // Use second image if hovered, otherwise first. Fallback to a placeholder if needed.
  const currentImage = isHovered && images[1] ? images[1] : images[0];

  return (
    <S.Card>
      {hasDiscount && <S.Badge>Sale -{discount}%</S.Badge>}

      <S.WishlistBtn
        title="Add to Wishlist"
        onClick={() => navigate("/wishlist")}
      >
        <Heart size={18} />
      </S.WishlistBtn>

      <Link to={`/products/${product.id}`} style={{ display: "block" }}>
        <S.ImageContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={currentImage}
            alt={name}
            loading="lazy"
            style={{ opacity: 1 }} // Keeps transition smooth
          />
        </S.ImageContainer>
      </Link>

      <S.Info>
        <S.Category>
          {category} • {season}
        </S.Category>
        <S.Name title={name}>{name}</S.Name>

        <S.PriceGroup>
          <S.CurrentPrice>£{salePrice.toFixed(2)}</S.CurrentPrice>
          {hasDiscount && <S.OldPrice>£{price.toFixed(2)}</S.OldPrice>}
        </S.PriceGroup>
      </S.Info>

      <S.AddToCartBtn onClick={() => navigate("/cart")}>
        Add to Cart
      </S.AddToCartBtn>
    </S.Card>
  );
};

export default ProductCard;
