import React from "react";
import UnstitchedProducts from "../features/Products/UnstitchedProducts";
import Heading from "../ui/Heading";

import Row from "../ui/Row";
import { useNavigate } from "react-router-dom";
import ButtonText from "../ui/ButtonText";

function Unstitched() {
  const navigate = useNavigate();
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">All UnStitched</Heading>
        <ButtonText onClick={() => navigate("/home")}>&larr; Back</ButtonText>
      </Row>
      <UnstitchedProducts />
    </div>
  );
}

export default Unstitched;
