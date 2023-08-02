import styled from "styled-components";
import GlobalStyles from "./Globalstyles";
import Destination from "./components/pages/Destination";
// import Home from "./components/pages/Home";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      {/* <Home /> */}
      <Destination />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;
