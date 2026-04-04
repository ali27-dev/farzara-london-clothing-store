import styled from "styled-components";
import { Search } from "lucide-react";
/* This search bar only shows on Desktop */
const StyleDesktopSearch = styled.div`
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

function DesktopSearch() {
  return (
    <StyleDesktopSearch>
      <Search size={16} />
      <input type="text" placeholder="Search for luxury clothing..." />
    </StyleDesktopSearch>
  );
}

export default DesktopSearch;
