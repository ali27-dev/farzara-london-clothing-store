import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import MainNav from "./MainNav";
import Logo from "./Logo";
// import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.5rem 1.8rem;
  border-bottom: 1px var(--color-grey-100);

  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      {/* <UserAvatar /> */}
      <Logo />
      <SearchBar />
      <MainNav />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
