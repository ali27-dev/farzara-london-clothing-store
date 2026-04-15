import { useNavigate } from "react-router-dom";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ContactUsPage() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Contact Us</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
    </>
  );
}

export default ContactUsPage;
