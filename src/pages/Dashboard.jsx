import Heading from "../ui/Heading";
import Wishlist from "./Wishlist";
import Row from "../ui/Row";
import styled from "styled-components";
import HeroSection from "../ui/HeroSection";

const StyledDashboard = styled.div`
  /* max-width: 120rem; */
  height: 100vh;
`;

function Dashboard() {
  return (
    <>
      <StyledDashboard>
        {/* <Row type="horizontal">
          <Heading as="h1">New Collections</Heading>
          <p>TEST</p>
        </Row> */}
        <HeroSection />
      </StyledDashboard>
      <Wishlist />
    </>
  );
}

export default Dashboard;
