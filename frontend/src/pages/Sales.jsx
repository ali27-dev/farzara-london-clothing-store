import { useNavigate } from "react-router-dom";
import OnSalesProducts from "../features/Products/OnSalesProducts";
import ButtonText from "../ui/ButtonText";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

function Sales() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Sales</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
      <OnSalesProducts />
    </>
  );
}

export default Sales;
