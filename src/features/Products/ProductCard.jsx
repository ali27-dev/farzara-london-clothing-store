import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import * as S from "./ProductCardStyles";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, category, price, discount, images, season, isSoldOut } =
    product;

  // High-performance hover state
  const [isHovered, setIsHovered] = useState(false);

  const [isWishlisted, setIsWishlisted] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    const wishlistArray = savedWishlist ? JSON.parse(savedWishlist) : [];
    return wishlistArray.includes(product.id);
  });

  // Math for FarZara pricing
  const hasDiscount = discount > 0;
  const salePrice = hasDiscount ? price - (price * discount) / 100 : price;

  // Use second image if hovered, otherwise first. Fallback to a placeholder if needed.
  const currentImage = isHovered && images[1] ? images[1] : images[0];

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isWishlisted;
    setIsWishlisted(newState);

    const savedWishlist = localStorage.getItem("wishlist");
    let wishlistArray = savedWishlist ? JSON.parse(savedWishlist) : [];

    if (newState) {
      if (!wishlistArray.includes(product.id)) {
        wishlistArray.push(product.id);
      }
    } else {
      wishlistArray = wishlistArray.filter((id) => id !== product.id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistArray));
  };

  return (
    <S.Card>
      {hasDiscount && <S.Badge>Sale -{discount}%</S.Badge>}

      <S.WishlistBtn
        title="Add to Wishlist"
        onClick={() => {
          setIsWishlisted(!isWishlisted);
        }}
        onClick={toggleWishlist}
      >
        <Heart
          size={18}
          color={isWishlisted ? "red" : "currentColor"}
          fill={isWishlisted ? "red" : "none"}
        />
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
          {isSoldOut && <S.SoldOutBadge>Sold Out</S.SoldOutBadge>}
        </S.PriceGroup>
      </S.Info>

      <S.AddToCartBtn
        style={{ opacity: isSoldOut ? 0.5 : 1 }}
        onClick={() => addToCart(product)}
        disabled={isSoldOut}
      >
        {isSoldOut ? "Sold Out" : "Add to Cart"}
      </S.AddToCartBtn>
    </S.Card>
  );
};

export default ProductCard;
