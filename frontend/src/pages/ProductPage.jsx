import { useNavigate } from "react-router-dom";
import Products from "../features/Products/Products";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ProductPage() {
  const navigate = useNavigate();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Products</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
      <Products />
    </>
  );
}

export default ProductPage;
