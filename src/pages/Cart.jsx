import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ButtonText from "../ui/ButtonText";

function Bookings() {
  const moveBack = useMoveBack();
  return (
    <Row type="horizontal">
      <Heading as="h1">All Carts</Heading>
      <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
    </Row>
  );
}

export default Bookings;
