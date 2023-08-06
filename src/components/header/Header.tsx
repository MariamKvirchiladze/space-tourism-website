import styled from "styled-components";
import logo from "/assets/shared/logo.svg";
import BurgerMenu from "./BurgerMenu";
import { useNavigate } from "react-router-dom";

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <img onClick={() => navigate("/")} src={logo} alt="home logo" />
      <hr />
      <BurgerMenu />
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  @media (min-width: 768px) {
    width: 100%;
  }
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
      margin-left: 39px;
      margin-top: 24px;
    }
    @media (min-width: 1024px) {
      margin-left: 55px;
      margin-top: 64px;
      gap: 64px;
    }
  }
  hr {
    height: 1px;
    width: 33vw;
    background-color: #ffffff;
    opacity: 0.25;
    position: absolute;
    top: 87px;
    left: 170px;
    z-index: 100;
    display: none;
    @media (min-width: 1440px) {
      display: block;
    }
  }
`;
