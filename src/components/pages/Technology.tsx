import styled from "styled-components";
import BgTechMob from "/assets/technology/background-technology-mobile.jpg";
import BgTechTab from "/assets/technology/background-technology-tablet.jpg";
import BgTechDesk from "/assets/technology/background-technology-desktop.jpg";
import Header from "../header/Header";

const Technology = (): JSX.Element => {
  return (
    <TechnologyContainer>
      <Header />
      <div className="spaceHeader">
        <h3>03</h3>
        <p className="text"> SPACE LAUNCH 101</p>
      </div>
      <div className="mainTech">
        <img className="land" alt="rocket photo" />
        <img className="port" alt="rocket photo" />
        <div className="chooseTech">
          <NavDiv>
            <a className="vehicle">
              <div className="rhombus">
                <span>1</span>
              </div>
            </a>
            <a className="spaceport">
              <div className="rhombus">
                <span>2</span>
              </div>
            </a>
            <a className="capsule">
              <div className="rhombus">
                <span>3</span>
              </div>
            </a>
          </NavDiv>
          <div className="technologyInfo">
            <div className="terminology">
              <h4>THE TERMINOLOGY… </h4>
              <h1> name</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              nesciunt. Veritatis illo dignissimos quidem non impedit,
              necessitatibus velit suscipit inventore consequuntur magni culpa,
              possimus quod numquam minus eveniet nihil nesciunt{" "}
            </p>
          </div>
        </div>
      </div>
    </TechnologyContainer>
  );
};

export default Technology;

const TechnologyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-image: url(${BgTechMob});
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: flex-start;
  @media (min-width: 768px) {
    background-image: url(${BgTechTab});
    padding-bottom: 98px;
  }

  @media (min-width: 1024px) {
    background-image: url(${BgTechDesk});
    padding-bottom: 120px;
  }
  .spaceHeader {
    padding-top: 112px;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      margin-bottom: 60px;
      justify-content: flex-start;
      padding-left: 38.5px;
      padding-top: 136px;
    }
    @media (min-width: 1024px) {
      padding-left: 5%;
      margin: 0 auto 154px auto;
      padding-top: 212px;
    }

    h3 {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      color: #ffffff;
      opacity: 0.25;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.7px;
      }
    }
    .text {
      font-family: "Barlow Condensed";
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 2.7px;
      text-align: left;
      color: #ffffff;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.375px;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        line-height: 34px;
        letter-spacing: 4.7px;
      }
    }
  }
  .mainTech {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 34px;
    @media (min-width: 768px) {
      padding-left: 5%;
      gap: 45px;
    }

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    .land {
      width: 100%;
      height: 170px;
      @media (min-width: 768px) {
        height: 310px;
      }
      @media (min-width: 1024px) {
        display: none;
      }
    }

    .port {
      display: none;
      width: 100%;
      @media (min-width: 1024px) {
        display: block;
        max-width: 515px;
        height: 527px;
      }
    }

    .chooseTech {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 26px;
      @media (min-width: 768px) {
        gap: 44px;
      }
      @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: flex-start;
      }
      @media (min-width: 1440px) {
        gap: 80px;
      }

      .technologyInfo {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        @media (min-width: 1024px) {
          gap: 17px;
          justify-content: flex-start;
          align-items: flex-start;
          max-width: 470px;
        }
        .terminology {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 9px;
          @media (min-width: 768px) {
            gap: 16px;
          }

          @media (min-width: 1024px) {
            gap: 11px;
            justify-content: flex-start;
            align-items: flex-start;
          }
          h4 {
            font-family: "Barlow Condensed";
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 2.3px;
            text-align: center;
            color: #d0d6f9;
            @media (min-width: 768px) {
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 2.7px;
              text-align: left;
            }
          }
          h1 {
            font-family: "Bellefair";
            font-size: 24px;
            color: #ffffff;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            text-transform: uppercase;
            @media (min-width: 768px) {
              font-size: 40px;
              line-height: 46px;
              letter-spacing: 0px;
            }

            @media (min-width: 1024px) {
              font-size: 56px;
              line-height: 64px;
              letter-spacing: 0px;
              text-align: left;
            }
          }
        }
        p {
          font-family: "Barlow";
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0px;
          text-align: center;
          color: #d0d6f9;
          max-width: 327px;
          @media (min-width: 768px) {
            font-size: 16px;
            line-height: 28px;
            letter-spacing: 0px;
            max-width: 458px;
          }

          @media (min-width: 1024px) {
            font-size: 18px;
            line-height: 32px;
            letter-spacing: 0px;
            text-align: left;
            max-width: 444px;
          }
        }
      }
    }
  }
`;
const NavDiv = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: column;
    max-width: 80px;
    gap: 32px;
  }

  a {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bellefair";
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.25);
    position: relative;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
    @media (min-width: 768px) {
      width: 60px;
      height: 60px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 1.5px;
    }
    @media (min-width: 1024px) {
      width: 80px;
      height: 80px;
      font-size: 32px;
      line-height: 37px;
      letter-spacing: 2px;
    }
  }
  a:hover {
    border: 1px solid rgba(255, 255, 255, 1);
  }

  .rhombus {
    width: 25px;
    height: 25px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    transform: rotate(45deg);
    @media (min-width: 768px) {
      width: 42px;
      height: 42px;
    }
    @media (min-width: 1024px) {
      width: 55px;
      height: 55px;
    }
  }
  .rhombus span {
    display: block;
    position: absolute;
    top: 15%;
    left: 40%;
    transform: rotate(-45deg);
    color: white;
  }
`;
