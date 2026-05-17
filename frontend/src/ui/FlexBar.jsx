import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";

const messages = [
  "✨ New Summer Collection Launched – Shop Now!",
  "📰 Read our latest article: 'Pakistani Lawn Trends 2024'",
  "🚚 Free shipping on orders over Rs. 5,000",
  "⭐️ Eid Festive Pret – Limited Stock!",
  "🎁 Exclusive: Get 10% off your first order with code FARZARA10",
];

const Bar = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #fffbe6 0%, #f9f6f2 100%);
  color: #a68c4a;
  font-weight: 500;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-bottom: 1px solid #f3e9c7;
  position: relative;
  z-index: 20;
  overflow: hidden;
  padding: 0 1.2rem;

  @media (max-width: 600px) {
    font-size: 0.98rem;
    min-height: 38px;
    padding: 0 0.5rem;
  }
`;

const Message = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  animation: fadeIn 0.7s;
  white-space: nowrap;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FlexBar = () => {
  const [index, setIndex] = useState(0);

  // Rotate messages every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Bar>
      <Message>
        <ArrowRight size={18} />
        {messages[index]}
      </Message>
    </Bar>
  );
};

export default FlexBar;
