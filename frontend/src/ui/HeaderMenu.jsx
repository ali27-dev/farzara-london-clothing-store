import styled from "styled-components";

// import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

// import LogOut from "../features/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";
// import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/cart")}>
          {/* <HiOutlineUser /> */}
          <p>cart</p>
        </ButtonIcon>
        <ButtonIcon onClick={() => navigate("/wishlist")}>
          {/* <HiOutlineUser /> */}
          <p>wishlist</p>
        </ButtonIcon>
      </li>
      {/* <DarkModeToggle />  */}

      {/* <li>
        <LogOut />
        <p>Logout</p>
      </li> */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
