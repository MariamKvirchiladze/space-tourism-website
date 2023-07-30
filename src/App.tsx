import styled from "styled-components";
import GlobalStyles from "./Globalstyles";
import Home from "./components/pages/Home";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Home />
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
