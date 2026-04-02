import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* gap: 0.8rem; */
`;

const StyleNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyleNavLink to="/">
            {/* <HiOutlineHome /> */}
            <span>Home</span>
          </StyleNavLink>
        </li>

        <li>
          <StyleNavLink to="/products">
            {/* <HiOutlineCalendar /> */}
            <span>Veraities</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/cart">
            {/* <HiOutlineHomeModern /> */}
            <span>Cart</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/wishlist">
            {/* <HiOutlineUsers /> */}
            <span>Wishlist</span>
          </StyleNavLink>
        </li>
        <li>
          <StyleNavLink to="/contactus">
            {/* <HiOutlineCog6Tooth /> */}
            <span>Contact us</span>
          </StyleNavLink>
        </li>
        {/* <li>
        <StyleNavLink to="account">
          <Hi />
          <span>Account</span>
        </StyleNavLink>
      </li> */}
      </NavList>
    </nav>
  );
}

export default MainNav;
