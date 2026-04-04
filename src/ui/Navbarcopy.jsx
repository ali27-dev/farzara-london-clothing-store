import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

// --- Styled Components ---

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vital for vertical centering */
  padding: 0 5%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 80px; /* Fixed height helps with alignment */
`;

// 2. Bonus: Logo as a Link
// (Professional practice: Clicking the logo always returns to Home)
const Logo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #1a1a1a;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;

  span {
    color: #bcac76;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 2rem 5%;
    gap: 1.5rem;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #333;
    font-size: 1.3rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 0;
  }

  /* PROFESSIONAL TIP: 
     React Router's 'active' class is caught here 
  */
  &:hover,
  &.active {
    color: #bcac76; /* FarZara Gold */
  }

  /* Underline effect for the Active link */
  &.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #bcac76;
    transition: width 0.3s ease;
  }
`;
/* This search bar only shows on Desktop */
const DesktopSearch = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  padding: 1rem 1.2rem;
  border-radius: 1.2rem;
  width: 300px;

  input {
    border: none;
    background: none;
    outline: none;
    margin-left: 0.8rem;
    width: 100%;
    font-size: 1.4rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* This search bar only shows inside the Mobile Menu */
const MobileSearch = styled(DesktopSearch)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    background: #f0f0f0;
  }
`;

const ActionIcons = styled.div`
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
  background: #1a1a1a;
  color: #fff;
  font-size: 10px;
  min-width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
`;

const MenuBtn = styled.div`
  display: none;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

// 1. The IconWrapper: Centering and Navigation
const IconWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  color: #1a1a1a;
  transition: all 0.2s ease;
  text-decoration: none; /* Removes default underline from Link */

  &:hover {
    color: #bcac76; /* FarZara Gold */
    transform: translateY(-2px); /* Subtle lift effect */
  }

  svg {
    display: block; /* Removes weird inline spacing below SVGs */
  }
`;

// --- Component ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo to="/home">
        Far<span>Zara</span> London
      </Logo>
      {/* Desktop Version Search */}
      <DesktopSearch>
        <Search size={16} />
        <input type="text" placeholder="Search for luxury clothing..." />
      </DesktopSearch>

      <NavLinks isOpen={isOpen}>
        <MobileSearch>
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </MobileSearch>

        {/* These links now control the SPA navigation */}
        <li>
          <StyledNavLink to="/home">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products">Products</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/categories">Categories</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/profile">Account</StyledNavLink>
        </li>
      </NavLinks>

      <ActionIcons>
        {/* Now navigates to Profile */}
        <IconWrapper to="/profile">
          <User size={20} />
        </IconWrapper>

        {/* Now navigates to Cart */}
        <IconWrapper to="/cart">
          <ShoppingCart size={20} />
          <Badge>0</Badge>
        </IconWrapper>

        <MenuBtn onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuBtn>
      </ActionIcons>
    </Nav>
  );
};

export default Navbar;
