import styled from "styled-components";
import { Search } from "lucide-react";
/* This search bar only shows on Desktop */
const StyleDesktopSearch = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-grey-100); /* replaces #f8f8f8 */
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
    color: var(--color-grey-900); /* matches nav link text */
  }
  input::placeholder {
    color: var(--color-brand-200);
    opacity: 1;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const SearchIconWrapper = styled.span`
  color: var(--color-brand-600);
  display: flex;
  align-items: center;
`;

function DesktopSearch() {
  return (
    <StyleDesktopSearch>
      <SearchIconWrapper>
        <Search size={16} />
      </SearchIconWrapper>
      <input type="text" placeholder="Search for luxury clothing..." />
    </StyleDesktopSearch>
  );
}

export default DesktopSearch;
