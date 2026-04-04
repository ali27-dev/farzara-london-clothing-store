import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MobileSearch from "./MobileSearch";

const NavLinksUL = styled.ul`
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

function NavLinks({ isOpen }) {
  return (
    <NavLinksUL isOpen={isOpen}>
      <MobileSearch />
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
    </NavLinksUL>
  );
}

export default NavLinks;
