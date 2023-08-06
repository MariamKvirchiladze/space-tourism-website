import styled from "styled-components";
import openMenu from "/assets/shared/icon-hamburger.svg";
import closeMenu from "/assets/shared/icon-close.svg";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BurgerMenu = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [choosePage, setChoosePage] = useState<string>("home");
  const location = useLocation();

  const openBurgerMenu = () => {
    setIsOpened(!isOpened);
  };
  useEffect(() => {
    const address = location.pathname;
    const PagePresent = address.split("/")[1];
    setChoosePage(PagePresent);
  }, [location]);

  return (
    <BurgerMenuContainer>
      <img
        onClick={openBurgerMenu}
        className="open-icon"
        src={openMenu}
        alt="svg burger"
      />
      <Menu isOpened={isOpened.toString()} choosePage={choosePage}>
        <img
          onClick={openBurgerMenu}
          className="close-icon"
          src={closeMenu}
          alt="close svg"
        />
        <div className="pages">
          <Link to="/">
            <h2> 00</h2>
            <h1>HOME </h1>
            <div className="page home"> </div>
            <div className="hover"></div>
          </Link>
          <Link to="/Destination/moon">
            <h2> 01</h2>
            <h1>DESTINATION </h1>
            <div className="page destination"> </div>
            <div className="hover"></div>
          </Link>
          <Link to="/Crew/douglas">
            <h2> 02</h2>
            <h1>CREW </h1>
            <div className="page crew"> </div>
            <div className="hover"></div>
          </Link>
          <Link to="/Technology/vehicle">
            <h2> 03</h2>
            <h1>TECHNOLOGY </h1>
            <div className="page technology"> </div>
            <div className="hover"></div>
          </Link>
        </div>
      </Menu>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;

const BurgerMenuContainer = styled.div`
  width: 24px;

  .open-icon {
    width: 24px;
    height: 21px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
const Menu = styled.div<{ isOpened: string; choosePage: string }>`
  width: 254px;
  height: 100vh;
  padding: 33px 33px 0 33px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40px);
  position: ${(props) => (props.isOpened == "true" ? "absolute" : "fixed")};
  right: ${(props) => (props.isOpened == "true" ? "0" : "-300%")};
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 65px;
  z-index: 1;
  @media (min-width: 768px) {
    width: 450px;
    height: 96px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 40px 48px;
    right: 0;
  }
  @media (min-width: 1024px) {
    width: 830px;
    padding: 39px 167px 39px 123px;
    margin-top: 40px;
  }

  .close-icon {
    width: 19.09px;
    height: 19.09px;
    @media (min-width: 768px) {
      display: none;
    }
  }

  .pages {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 37px;
    }
    @media (min-width: 1024px) {
      gap: 50px;
    }

    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 11px;
      align-items: center;
      position: relative;
      justify-content: flex-start;
      text-decoration: none;

      @media (min-width: 768px) {
        gap: 0px;
        flex-direction: column;
        position: relative;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        gap: 11px;
      }
    }
    h2 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      color: #ffffff;
      @media (min-width: 768px) {
        display: none;
      }
      @media (min-width: 1024px) {
        display: flex;
      }
    }

    h1 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      color: #ffffff;
      @media (min-width: 768px) {
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 2.3px;
        text-align: left;
      }
      @media (min-width: 1024px) {
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 2.7px;
        text-align: left;
      }
    }
    .hover {
      height: 3px;
      opacity: 0.5;
      background-color: #ffffff;
      position: absolute;
      display: none;
    }
    .page {
      width: 3px;
      height: 31px;
      background-color: #ffffff;
      position: absolute;
      right: -33px;
      @media (min-width: 768px) {
        width: 100%;
        height: 3px;
        right: 0;
        bottom: -40px;
        display: none;
      }
    }
    .home {
      display: ${(props) => (props.choosePage === "" ? "flex" : "none")};
    }

    .destination {
      display: ${(props) =>
        props.choosePage === "Destination" ? "flex" : "none"};
    }

    .crew {
      display: ${(props) => (props.choosePage === "Crew" ? "flex" : "none")};
    }

    .technology {
      display: ${(props) =>
        props.choosePage === "Technology" ? "flex" : "none"};
    }

    a:hover .hover {
      width: 100%;
      display: block;
      bottom: -40px;
    }
  }
`;
