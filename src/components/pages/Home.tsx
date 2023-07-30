import Header from "../header/Header";
import styled from "styled-components";
import bgHomeMob from "/assets/home/background-home-mobile.jpg";
import bgHomeTab from "/assets/home/background-home-tablet.jpg";
import bgHomeDesk from "/assets/home/background-home-desktop.jpg";

const Home = (): JSX.Element => {
  return (
    <HomeContainer>
      <Header />
      <div className="spaceContainer">
        <div className="space">
          <h3> SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          EXPLORE
          <div className="hover"> </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 24px 24px 0;
  background-image: url(${bgHomeMob});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  @media screen and (min-width: 768px) {
    background-image: url(${bgHomeTab});
    padding: 0;
    gap: 106px;
  }
  @media screen and (min-width: 1024px) {
    background-image: url(${bgHomeDesk});
    gap: 251px;
  }

  .spaceContainer {
    padding-top: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      padding-top: 202px;
    }
    @media (min-width: 1024px) {
      display: flex;
      width: 100%;

      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 130px;
    }
  }

  .space {
    max-width: 445px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    @media (min-width: 768px) {
      gap: 24px;
    }
    @media (min-width: 1024px) {
      align-items: flex-start;
    }

    h1 {
      font-family: Bellefair;
      font-size: 80px;
      font-weight: 400;
      line-height: 100px;
      text-align: center;
      color: white;
      @media screen and (min-width: 768px) {
        line-height: 150px;
        font-size: 150px;
      }
      @media screen and (min-width: 1024px) {
        line-height: 172px;
      }
    }

    h3 {
      font-family: Barlow Condensed;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: center;
      color: #d0d6f9;
      @media screen and (min-width: 768px) {
        line-height: 24px;
        font-size: 20px;
        letter-spacing: 3.375px;
      }
      @media screen and (min-width: 1024px) {
        line-height: 33.6px;
        font-size: 28px;
        letter-spacing: 4.72px;
      }
    }
    p {
      font-family: Barlow;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
      color: #d0d6f9;
      @media screen and (min-width: 768px) {
        line-height: 28px;
        font-size: 16px;
      }
      @media screen and (min-width: 1024px) {
        line-height: 32px;
        font-size: 18px;
        text-align: left;
      }
    }
  }

  .explore {
    width: 150px;
    height: 150px;
    margin-top: 81px;
    margin-bottom: 48px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #0b0d17;
    font-family: Bellefair;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 1.25px;
    text-align: center;

    @media screen and (min-width: 768px) {
      width: 242px;
      height: 242px;
      line-height: 36.37px;
      font-size: 32px;
      letter-spacing: 2;
      margin-top: 156px;
      margin-bottom: 90px;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
      align-self: flex-end;
      width: 274px;
      height: 274px;
      position: relative;
    }

    .hover {
      position: absolute;
      width: 240px;
      height: 240px;
      background-color: white;
      opacity: 0.1;
      mix-blend-mode: normal;
      border-radius: 50%;
      display: none;
      @media screen and (min-width: 768px) {
        width: 396px;
        height: 396px;
      }
      @media screen and (min-width: 1024px) {
        width: 450px;
        height: 450px;
      }
    }
  }
  .explore:hover .hover {
    display: block;
  }
`;
