import styled from "styled-components";

const StyledHero = styled.div`
  max-width: 120rem;
`;

const StyledImage = styled.img`
  height: 80vh;
`;
function HeroSection() {
  return (
    <StyledHero>
      <StyledImage src="cabin-001.jpg" alt="" />
    </StyledHero>
  );
}

export default HeroSection;
