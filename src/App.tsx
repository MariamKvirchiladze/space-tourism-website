import styled from "styled-components";
import GlobalStyles from "./Globalstyles";
import Technology from "./components/pages/Technology";
import Crew from "./components/pages/Crew";
import Destination from "./components/pages/Destination";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="Crew" element={<Crew />} />
          <Route path="Technology" element={<Technology />} />
        </Routes>
      </MainContainer>
    </Router>
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
