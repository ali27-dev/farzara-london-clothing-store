import { useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import DesktopSearch from "./DesktopSearch";
import NavLinks from "./NavLinks";
import ActionIcons from "./ActionIcons";

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

// --- Component ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo />
      <DesktopSearch />
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActionIcons isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};

export default Navbar;
