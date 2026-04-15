import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 8rem 5%;
  max-width: 140rem;
  margin: 0 auto;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 10rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 6rem;
  }
`;

// --- LEFT SIDE: INFO ---
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    font-size: 1.6rem;
    color: var(--color-grey-500);
    line-height: 1.8;
  }
`;

export const ContactMethod = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  .icon-box {
    background-color: var(--color-brand-600);
    color: white;
    padding: 1.2rem;
    border-radius: var(--border-radius-sm);
    display: flex;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    color: var(--color-grey-600);
  }
`;

// --- RIGHT SIDE: FORM ---
export const FormSection = styled.form`
  background-color: var(--color-grey-50);
  padding: 5rem;
  border-radius: var(--border-radius-md);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 480px) {
    padding: 3rem 2rem;
  }
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  display: block;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid var(--color-grey-200);
  background: white;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid var(--color-grey-200);
  background: white;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  height: 15rem;
  resize: none;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

export const SendButton = styled.button`
  background-color: var(--color-grey-900);
  color: white;
  padding: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
  border-radius: var(--border-radius-md);
  &:hover {
    background-color: var(--color-brand-600);
    transform: translateY(-2px);
  }
`;

export const WhatsAppBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--color-brand-600); /* Official WhatsApp Green */
  color: white;
  padding: 1.2rem;
  border-radius: var(--border-radius-sm);
  font-weight: 700;
  margin-top: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    color: white;
  }
`;
