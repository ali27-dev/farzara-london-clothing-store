import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { FiMessageCircle } from "react-icons/fi";
import * as S from "./ContactUsStyles";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to FarZara London.");
  };

  return (
    <S.ContactContainer>
      <S.ContactGrid>
        {/* LEFT COLUMN: GET IN TOUCH */}
        <S.InfoSection>
          <div>
            <h1>Get In Touch</h1>
            <p>
              Have a question about our latest Unstitched collection or your
              recent order? Our London-based team is here to assist you.
            </p>
          </div>

          <S.ContactMethod>
            <div className="icon-box">
              <Phone size={24} />
            </div>
            <div>
              <h4>Call Us</h4>
              <span>+44 20 7946 0000</span>
            </div>
          </S.ContactMethod>

          <S.ContactMethod>
            <div className="icon-box">
              <Mail size={24} />
            </div>
            <div>
              <h4>Email Support</h4>
              <span>support@farzara.com</span>
            </div>
          </S.ContactMethod>

          <S.ContactMethod>
            <div className="icon-box">
              <MapPin size={24} />
            </div>
            <div>
              <h4>Visit Our Showroom</h4>
              <span>29 Eve Road, Bristol, BS5 0JX, UK</span>
            </div>
          </S.ContactMethod>
          <S.WhatsAppBtn
            href="https://wa.me/+44 20 7946 0000?text=Hello%20FarZara%20London%2C%20I%20have%20a%20query%20about..."
            target="_blank"
          >
            <FiMessageCircle size={20} /> Chat on WhatsApp
          </S.WhatsAppBtn>
        </S.InfoSection>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <S.FormSection onSubmit={handleSubmit}>
          <S.InputGroup>
            <div>
              <S.Label>First Name</S.Label>
              <S.StyledInput type="text" placeholder="Ahmad" required />
            </div>
            <div>
              <S.Label>Last Name</S.Label>
              <S.StyledInput type="text" placeholder="Ali" required />
            </div>
          </S.InputGroup>

          <div>
            <S.Label>Email Address</S.Label>
            <S.StyledInput
              type="email"
              placeholder="ahmad@example.com"
              required
            />
          </div>

          <div>
            <S.Label>Subject</S.Label>
            <S.StyledInput type="text" placeholder="Order Inquiry" required />
          </div>

          <div>
            <S.Label>Message</S.Label>
            <S.TextArea placeholder="Tell us how we can help..." required />
          </div>

          <S.SendButton type="submit">Send Message</S.SendButton>
        </S.FormSection>
      </S.ContactGrid>
    </S.ContactContainer>
  );
}

export default ContactUs;
