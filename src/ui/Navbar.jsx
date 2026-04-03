import React, { useState } from "react";
import styled from "styled-components";
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

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #1a1a1a;
  text-transform: uppercase;
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

const NavLink = styled.li`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    color: #bcac76;
  }
`;

/* This search bar only shows on Desktop */
const DesktopSearch = styled.div`
  display: flex;
  align-items: center;
  background: #f8f8f8;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  width: 300px;

  input {
    border: none;
    background: none;
    outline: none;
    margin-left: 0.8rem;
    width: 100%;
    font-size: 0.85rem;
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

// --- Component ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        Far<span>Zara</span> London
      </Logo>

      {/* Desktop Version Search */}
      <DesktopSearch>
        <Search size={16} />
        <input type="text" placeholder="Search for luxury clothing..." />
      </DesktopSearch>

      <NavLinks isOpen={isOpen}>
        {/* Mobile Version Search (Appears at the top of the menu) */}
        <MobileSearch>
          <Search size={18} />
          <input type="text" placeholder="Search..." />
        </MobileSearch>

        <NavLink>Home</NavLink>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>Accessories</NavLink>
      </NavLinks>

      <ActionIcons>
        <div className="icon-wrapper">
          <User size={20} />
        </div>

        <div className="icon-wrapper">
          <ShoppingCart size={20} />
          <Badge>0</Badge>
        </div>

        <MenuBtn onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuBtn>
      </ActionIcons>
    </Nav>
  );
};

export default Navbar;
