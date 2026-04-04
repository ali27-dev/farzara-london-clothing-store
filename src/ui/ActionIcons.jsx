import styled from "styled-components";

import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const StyleActionIcons = styled.div`
  display: flex;
  align-items: center; /* Ensures User, Cart, and Menu icons are perfectly leveled */
  gap: 1.2rem;
  height: 100%;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    transition: color 0.2s;

    &:hover {
      color: #bcac76;
    }
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: var(--color-grey-900); /* replaces #1a1a1a */
  color: var(--color-grey-0); /* replaces #fff */
  font-size: 10px;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
`;
const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  color: var(--color-brand-600); /* brand accent color for icons */
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover,
  &.active {
    color: var(--color-brand-600);
    transform: translateY(-2px);
  }

  svg {
    display: block;
    transition: color 0.2s, transform 0.2s;
  }
`;

const MenuBtn = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: flex;
  }
`;
function ActionIcons({ isOpen, setIsOpen }) {
  return (
    <StyleActionIcons>
      {/* Now navigates to Profile */}
      <IconWrapper to="/profile">
        <User size={25} />
      </IconWrapper>

      {/* Now navigates to Cart */}
      <IconWrapper to="/cart">
        <ShoppingCart size={25} />
        <Badge>0</Badge>
      </IconWrapper>

      <MenuBtn onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuBtn>
    </StyleActionIcons>
  );
}

export default ActionIcons;
