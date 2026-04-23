import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  background-color: var(--color-grey-900);
  color: var(--color-grey-100);
  /* Reduced top padding, kept side padding for 'breathing room' at edges */
  padding: 6rem 4% 3rem;
  border-top: 1px solid var(--color-grey-800);
  width: 100%;
`;

export const FooterContainer = styled.div`
  /* REMOVED: max-width: 140rem; */
  /* REMOVED: margin: 0 auto; */

  display: grid;
  /* Columns now expand to fill the entire width of the screen */
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;

  @media (max-width: 1200px) {
    /* Slightly tighter gap for smaller laptops to prevent overflow */
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Logo = styled(Link)`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--color-grey-0);
  text-transform: uppercase;

  span {
    color: var(--color-brand-600); /* FarZara Red */
  }
`;

export const Description = styled.p`
  line-height: 1.8;
  color: var(--color-grey-400);
  max-width: 30rem;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: var(--color-grey-800);
  border-radius: 50%;
  color: var(--color-grey-100);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: var(--color-brand-600);
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(214, 48, 49, 0.3); /* Subtle red glow */
  }
`;

export const ColumnTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-grey-0);
  margin-bottom: 1rem;
  position: relative;

  /* Elegant underline for the title */
  &::after {
    content: "";
    display: block;
    width: 3rem;
    height: 2px;
    background-color: var(--color-brand-600);
    margin-top: 0.8rem;
  }

  @media (max-width: 600px) {
    &::after {
      margin: 0.8rem auto 0;
    } /* Center underline on mobile */
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const FooterLink = styled(Link)`
  color: var(--color-grey-400);
  transition: all 0.3s;
  display: inline-block;

  &:hover {
    color: var(--color-brand-600);
    transform: translateX(5px); /* Professional "slide-in" hover */
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-grey-800);
  border: 1px solid var(--color-grey-700);
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-100);
  font-size: 1.2rem;

  &:focus {
    outline: none;
    border-color: var(--color-brand-600);
  }
`;

export const SubmitBtn = styled.button`
  background-color: var(--color-brand-600);
  color: white;
  padding: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export const WhatsAppBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #25d366; /* Official WhatsApp Green */
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

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--color-grey-400);
  font-size: 1.3rem;
`;

export const CopyrightBar = styled.div`
  width: 100%;
  background: var(--color-grey-900);
  color: var(--color-grey-400);
  text-align: center;
  font-size: 1.1rem;
  padding: 1.2rem 0 0.2rem 0;
  border-top: 1px solid var(--color-grey-800);
  letter-spacing: 0.5px;
`;
