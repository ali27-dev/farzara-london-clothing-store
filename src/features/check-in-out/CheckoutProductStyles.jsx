import styled from "styled-components";

// Update the main container to handle the stack
export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 42rem;
  gap: 0; /* We use borders to separate on desktop */
  min-height: 100vh;
  background-color: white;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse; /* UX TIP: Show Summary at top or bottom? */
  }
`;

// Left Side (Form) needs horizontal padding that adjusts
export const FormSection = styled.section`
  padding: 4rem 8% 6rem 15%; /* Extra left padding for ultra-wide desktop */

  @media (max-width: 1200px) {
    padding: 4rem 5%;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

// Input Group: Side-by-side on desktop, stacked on mobile
export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack inputs like First/Last name */
    gap: 0;
  }
`;

// Floating Label Input Wrapper
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem 1.2rem 0.6rem; /* Space for the floating label */
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  font-size: 1.4rem;
  background: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 1px #000;
  }
`;

export const FloatingLabel = styled.label`
  position: absolute;
  top: 0.5rem;
  left: 1.2rem;
  font-size: 1rem;
  color: #707070;
  pointer-events: none;
  text-transform: capitalize;
`;

// Shipping Method Box
export const MethodBox = styled.div`
  border: 1px solid #000; /* High contrast for selected method */
  padding: 1.8rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 3rem;
  background-color: #f9f9f9;
`;

export const FormBlock = styled.div`
  margin-bottom: 3rem;

  h2 {
    margin-bottom: 1.5rem;
  }
`;

export const PaymentBox = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-top: 1rem;
  overflow: hidden;
`;

export const PaymentOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #d9d9d9;
  cursor: pointer;
  background: ${(props) => (props.active ? "#f9f9f9" : "transparent")};

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
  }
`;

export const PayButton = styled.button`
  width: 100%;
  padding: 1.8rem;
  background-color: #000;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #333;
  }
`;

// --- RIGHT SIDE SUMMARY STYLES ---
export const SummaryAside = styled.aside`
  background-color: #fafafa; /* Light grey like the screenshot */
  padding: 4rem;
  border-left: 1px solid #e1e1e1;
  height: 100%;

  @media (max-width: 1024px) {
    border-left: none;
    background-color: white;
    padding: 2rem 0;
  }
`;

export const CheckoutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 6.4rem;
  height: 6.4rem;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const QtyBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: rgba(114, 114, 114, 0.9);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
`;

export const ItemInfo = styled.div`
  flex: 1;
  h4 {
    font-size: 1.3rem;
    font-weight: 500;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    color: #717171;
  }
`;
