import styled from "styled-components";
import { Search } from "lucide-react";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid var(--color-brand-200, #bcac76);
  border-radius: 2rem;
  padding: 0.6rem 1.4rem;
  box-shadow: 0 2px 8px rgba(191, 167, 122, 0.07);
  width: 100%;
  max-width: 400px;
  transition: box-shadow 0.2s;

  &:focus-within {
    box-shadow: 0 4px 16px rgba(191, 167, 122, 0.15);
    border-color: var(--color-brand-600, #a68c4a);
  }

  input {
    border: none;
    background: none;
    outline: none;
    margin-left: 0.8rem;
    width: 100%;
    font-size: 1.25rem;
    color: var(--color-grey-900, #222);
    font-family: inherit;
    padding: 0.4rem 0;
  }

  input::placeholder {
    color: var(--color-brand-200, #bcac76);
    opacity: 1;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }

  /* Responsive: Hide on mobile if desktopOnly, hide on desktop if mobileOnly */
  ${({ desktopOnly }) =>
    desktopOnly &&
    `
    @media (max-width: 1024px) {
      display: flex;
    }
  `}
  ${({ mobileOnly }) =>
    mobileOnly &&
    `
    display: none;
    @media (max-width: 1024px) {
      display: none;
      margin-bottom: 1rem;
      background: #f0f0f0;
    }
  `}
`;

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  desktopOnly,
  mobileOnly,
}) {
  return (
    <StyledSearchBar desktopOnly={desktopOnly} mobileOnly={mobileOnly}>
      <Search size={16} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Search"
      />
    </StyledSearchBar>
  );
}

export default SearchBar;
