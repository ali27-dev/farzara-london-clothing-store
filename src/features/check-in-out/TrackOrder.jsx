import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import * as S from "./TrackOrderStyles";
import Heading from "../../ui/Heading";

const TrackOrderSearch = () => {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    // Standardizing the ID (removing # if user added it)
    const cleanId = orderId.replace("#", "").trim();

    // Redirect to the dynamic tracking page
    navigate(`/track-order/${cleanId}`);
  };

  return (
    <S.SearchWrapper>
      <div style={{ marginBottom: "2rem", color: "var(--color-brand-600)" }}>
        <Search size={48} strokeWidth={1.5} />
      </div>

      <Heading as="h1" style={{marginBottom:"2rem"}}>Track Your Order</Heading>
      <Heading as="p">
        Enter your Order ID to check the real-time status of your shipment.
      </Heading>

      <S.SearchBox onSubmit={handleSearch}>
        <S.SearchInput
          type="text"
          placeholder="Enter Order ID (e.g. FZ-99284)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <S.SearchButton type="submit" disabled={!orderId}>
          Track Order Status
        </S.SearchButton>
      </S.SearchBox>

      <p style={{ marginTop: "3rem", fontSize: "1.3rem", color: "#999" }}>
        Can't find your ID? Check your order confirmation email.
      </p>
    </S.SearchWrapper>
  );
};

export default TrackOrderSearch;
