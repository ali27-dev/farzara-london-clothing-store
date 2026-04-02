import styled from "styled-components";
import Heading from "../ui/Heading";
import Table from "../ui/Table";

const StyledProducts = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr auto;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 1.6rem;
`;

const StyledPerProduct = styled.ul`
  width: 4rem;
  height: 4rem;
`;
function Products() {
  return <StyledPerProduct></StyledPerProduct>;
}

export default Products;
