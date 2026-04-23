import { useNavigate } from "react-router-dom";
import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ContactUs from "../features/contactUs/ContactUs";

function ContactUsPage() {
  const navigate = useNavigate();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Contact Us</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
      <ContactUs />
    </>
  );
}

export default ContactUsPage;
