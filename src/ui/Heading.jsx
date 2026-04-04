import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
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

line-height: 1.4;
`;

export default Heading;
