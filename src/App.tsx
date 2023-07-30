import styled from "styled-components";
import GlobalStyles from "./Globalstyles";
import Header from "./components/header/Header";

function App() {
  return (
    <MainContainer>
      <GlobalStyles />
      <Header />
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
  background-color: gray; //temporary
  align-items: center;
`;
