import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ActionIcons from "./ActionIcons";
import SearchBar from "./SearchBar";

// --- Styled Components ---

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vital for vertical centering */
  padding: 0 5%;
  background-color: var(--color-grey-0); /* Use global background */
  box-shadow: 0 2px 10px var(--color-grey-300); /* Use global shadow color */
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 80px; /* Fixed height helps with alignment */
`;

// --- Component ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <Nav ref={navRef}>
      <Logo />
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActionIcons isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};

export default Navbar;
