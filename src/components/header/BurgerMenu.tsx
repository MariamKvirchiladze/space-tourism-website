import styled from "styled-components";
import openMenu from "/assets/shared/icon-hamburger.svg";
import closeMenu from "/assets/shared/icon-close.svg";
import { useState } from "react";

const BurgerMenu = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openBurgerMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <BurgerMenuContainer>
      <img
        onClick={openBurgerMenu}
        className="open-icon"
        src={openMenu}
        alt="svg burger"
      />
      <Menu isOpened={isOpened.toString()}>
        <img
          onClick={openBurgerMenu}
          className="close-icon"
          src={closeMenu}
          alt="close svg"
        />
        <div className="pages">
          <a>
            <h2> 00</h2>
            <h1>HOME </h1>
            <div className="hover"></div>
          </a>
          <a>
            <h2> 01</h2>
            <h1>DESTINATION </h1>
            <div className="hover"></div>
          </a>
          <a>
            <h2> 02</h2>
            <h1>CREW </h1>
            <div className="hover"></div>
          </a>
          <a>
            <h2> 03</h2>
            <h1>TECHNOLOGY </h1>
            <div className="hover"></div>
          </a>
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
const Menu = styled.div<{ isOpened: string }>`
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

    a:hover .hover {
      width: 100%;
      display: block;
      bottom: -40px;
    }
  }
`;
