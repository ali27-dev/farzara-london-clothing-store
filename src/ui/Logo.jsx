import styled from "styled-components";
import { Link } from "react-router-dom";

// 2. Bonus: Logo as a Link
// (Professional practice: Clicking the logo always returns to Home)
const StyleLogo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: #1a1a1a;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0;

  span {
    color: #bcac76;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function Logo() {
  return (
    <>
      <StyleLogo to="/home">
        Far<span>Zara</span> London
      </StyleLogo>
    </>
  );
}

export default Logo;
