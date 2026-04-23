import styled from "styled-components";

// THE OVERLAY (Dimmed background)
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 999;
  transition: all 0.3s;

  /* Handle visibility based on props */
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

// THE DRAWER (The actual sidebar)
export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: var(--color-grey-0);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-lg);

  /* Responsive Widths */
  width: 40rem; /* Desktop default */

  @media (max-width: 768px) {
    width: 35rem;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full screen on mobile */
  }

  /* Slide Animation Logic */
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
`;

export const Header = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const CloseBtn = styled.button`
  font-size: 2.4rem;
  color: var(--color-grey-500);
  transition: color 0.2s;

  &:hover {
    color: var(--color-brand-600);
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto; /* Internal scroll only */
  padding: 2rem;
`;
// --- CART ITEM STYLES ---
export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-grey-100);
`;

export const ItemImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-grey-800);
    cursor: pointer;
    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: var(--color-grey-50);
  padding: 0.4rem 1rem;
  width: fit-content;
  border-radius: var(--border-radius-tiny);

  button {
    font-size: 1.8rem;
    color: var(--color-grey-600);
    &:hover {
      color: var(--color-brand-600);
    }
  }
`;

// --- SIDEBAR FOOTER STYLES ---
export const Footer = styled.div`
  padding: 2.5rem 2rem;
  border-top: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: ${(props) =>
    props.primary ? "var(--color-grey-900)" : "transparent"};
  color: ${(props) => (props.primary ? "white" : "var(--color-grey-800)")};
  border: ${(props) =>
    props.primary ? "none" : "1px solid var(--color-grey-200)"};
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "var(--color-brand-600)" : "var(--color-grey-50)"};
    color: ${(props) => (props.primary ? "white" : "var(--color-brand-600)")};
  }
`;
