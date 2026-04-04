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
        <StyledNavLink to="/contactus">Contact us</StyledNavLink>
      </li>
    </NavLinksUL>
  );
}

export default NavLinks;
