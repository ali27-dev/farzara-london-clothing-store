import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
       font-family: "Playfair Display", "Merriweather", serif;
  font-size: 4.2rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-grey-900);
  margin: 0;
  line-height: 1.1;
  background: linear-gradient(
    90deg,
    var(--color-grey-900) 60%,
    var(--color-brand-600) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  filter: drop-shadow(0 2px 8px rgba(191, 167, 122, 0.08));
  animation: fadeInTitle 1.5s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
  @media (max-width: 768px) {
    font-size: 2.1rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: 600;
      font-size: 2rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-weight: 500;
      font-size: 2rem;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 900;
      line-height: 1.1;
      color: var(--color-grey-900); /* matches logo/nav color */
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      letter-spacing: -1px;
    `}
  ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-grey-600); /* matches brand accent */
      margin-bottom: 0.8rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "p" &&
    css`
      font-family: "Inter", "Roboto", Arial, sans-serif;
      font-size: 1.8rem;
      color: var(--color-grey-900);
      max-width: 68rem;
      margin: 0 auto;
      line-height: 1.6;
      font-weight: 400;
      letter-spacing: 0.01em;
      opacity: 0.92;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 0.7rem;
      padding: 1.1rem 2.2rem;
      box-shadow: 0 2px 16px 0 rgba(191, 167, 122, 0.07);
      animation: fadeInSubtext 1.5s 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
      @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.8rem 1rem;
      }
      /* ...keyframes... */

      @keyframes fadeInSubtext {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.98);
        }
        100% {
          opacity: 0.92;
          transform: translateY(0) scale(1);
        }
      }
    `}

line-height: 1.4;
`;

export default Heading;
