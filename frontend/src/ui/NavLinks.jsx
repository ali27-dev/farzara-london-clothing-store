import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { useState } from "react";

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
    background: var(--color-grey-0); /* replaces #fff */
    padding: 2rem 5%;
    gap: 1.5rem;
    border-top: 1px solid var(--color-grey-200); /* replaces #f0f0f0 */
    box-shadow: 0 10px 15px var(--color-grey-300); /* replaces rgba(0,0,0,0.05) */
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-grey-800); /* Use global grey for default */
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 0;
  }

  &:hover,
  &.active {
    color: var(--color-brand-600); /* Use global brand color for active/hover */
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-brand-600);
    transition: width 0.3s ease;
  }
`;

function NavLinks({ isOpen, setIsOpen }) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleLinkClick = () => {
    if (setIsOpen) setIsOpen(false);
  };

  return (
    <NavLinksUL isOpen={isOpen}>
      <li>
        <SearchBar
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
          mobileOnly
        />
      </li>
      {/* These links now control the SPA navigation */}
      <li>
        <StyledNavLink to="/home" onClick={handleLinkClick}>
          Home
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/products" onClick={handleLinkClick}>
          Products
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/unstitched" onClick={handleLinkClick}>
          Unstitched
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/sales" onClick={handleLinkClick}>
          Sales
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/contactus" onClick={handleLinkClick}>
          Contact us
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/track-order" onClick={handleLinkClick}>
          Track Order
        </StyledNavLink>
      </li>
    </NavLinksUL>
  );
}

export default NavLinks;
