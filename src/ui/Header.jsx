import styled from "styled-components";
// import HeaderMenu from "./HeaderMenu";
// import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.5rem 2.8rem;
  border-bottom: 1px var(--color-grey-100);

  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
      {/* <UserAvatar />
      <HeaderMenu /> */}
    </StyledHeader>
  );
}

export default Header;
