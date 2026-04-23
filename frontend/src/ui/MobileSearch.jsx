import styled from "styled-components";
import { Search } from "lucide-react";

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
const StyledMobileSearch = styled(DesktopSearch)`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    background: #f0f0f0;
  }
`;

function MobileSearch() {
  return (
    <StyledMobileSearch>
      <Search size={18} />
      <input type="text" placeholder="Search..." />
    </StyledMobileSearch>
  );
}

export default MobileSearch;
