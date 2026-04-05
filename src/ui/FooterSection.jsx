import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaMailBulk,
} from "react-icons/fa";
import * as S from "./FooterSectionStyle";
import { FiMessageCircle } from "react-icons/fi";

const Footer = () => {
  return (
    <S.StyledFooter>
      <S.FooterContainer>
        {/* COLUMN 1: ABOUT SECTION */}
        <S.Column>
          <S.Logo to="/">
            Far<span>Zara</span> London
          </S.Logo>
          <S.Description>
            FarZara London is a premium clothing brand dedicated to bringing the
            sophisticated elegance of London fashion to the world. Quality,
            comfort, and timeless style.
          </S.Description>

          <S.SocialLinks>
            <S.SocialIcon
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </S.SocialIcon>
            <S.SocialIcon
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </S.SocialIcon>
          </S.SocialLinks>
        </S.Column>
        {/* COLUMN 2: QUICK LINKS */}
        <S.Column>
          <S.ColumnTitle>Quick Links</S.ColumnTitle>
          <S.FooterList>
            <li>
              <S.FooterLink to="/">Home</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/products">Products</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/categories">Categories</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/cart">Shopping Cart</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/contact">Contact Us</S.FooterLink>
            </li>
          </S.FooterList>
        </S.Column>
        {/* COLUMN 3: CUSTOMER CARE */}
        <S.Column>
          <S.ColumnTitle>Help & Info</S.ColumnTitle>
          <S.FooterList>
            <li>
              <S.FooterLink to="/faq">FAQ</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/privacy">Privacy Policy</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/terms">Terms & Conditions</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/shipping">Shipping Info</S.FooterLink>
            </li>
            <li>
              <S.FooterLink to="/returns">Returns & Refunds</S.FooterLink>
            </li>
          </S.FooterList>
        </S.Column>

        <S.Column>
          <S.ColumnTitle>Contact Us</S.ColumnTitle>

          <S.ContactInfo>
            <p>
              <FaPhone size={14} style={{ marginRight: "8px" }} /> +44 20 7946
              0000
            </p>
            <p>
              <FaMailBulk size={14} style={{ marginRight: "8px" }} />{" "}
              support@farzara.com
            </p>
          </S.ContactInfo>

          <S.ContactForm
            as="form"
            action="mailto:support@farzara.com"
            method="POST"
            encType="text/plain"
          >
            {/* <S.Input type="text" name="user_name" placeholder="Your Name" required /> */}
            <S.Input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />
            {/* <S.TextArea name="message" placeholder="How can we help?" required /> */}
            <S.SubmitBtn as="button" type="submit">
              Send Email
            </S.SubmitBtn>
          </S.ContactForm>

          <S.WhatsAppBtn
            href="https://wa.me/442079460000?text=Hello%20FarZara%20London%2C%20I%20have%20a%20query%20about..."
            target="_blank"
          >
            <FiMessageCircle size={20} /> Chat on WhatsApp
          </S.WhatsAppBtn>
        </S.Column>
      </S.FooterContainer>
      <S.CopyrightBar>
        &copy; {new Date().getFullYear()} FarZara London. All rights reserved.
      </S.CopyrightBar>
    </S.StyledFooter>
  );
};

export default Footer;
