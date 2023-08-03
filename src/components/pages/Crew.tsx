import styled from "styled-components";
import Header from "../header/Header";
import BgCrewMob from "/assets/crew/background-crew-mobile.jpg";
import BgCrewTab from "/assets/crew/background-crew-tablet.jpg";
import BgCrewDesk from "/assets/crew/background-crew-desktop.jpg";

const Crew = (): JSX.Element => {
  return (
    <CrewContainer>
      <Header />
      <div className="titleCrew">
        <h2>02</h2>
        <p className="titleText"> Meet your crew</p>
      </div>
      <div className="mainCrew">
        <div className="photoBox">
          <img alt="photo of crew member" />
          <hr />
        </div>
        <div className="crewInfo">
          <NavDiv>
            <a className="douglas"></a>
            <a className="mark"></a>
            <a className="victor"></a>
            <a className="annousheh"></a>
          </NavDiv>
          <div className="crewRole">
            <div className="name">
              <h2>role </h2>
              <h1> name</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              incidunt officiis assumenda ullam, nihil odit exercitationem
              numquam accusantium reprehenderit quisquam corrupti minima esse
              labore porro cupiditate enim vel a dolorem
            </p>
          </div>
        </div>
      </div>
    </CrewContainer>
  );
};

export default Crew;

const CrewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${BgCrewMob});
  color: #ffffff;

  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px 24px 0 24px;
  justify-content: flex-start;
  @media (min-width: 768px) {
    padding: 0px;
    background-image: url(${BgCrewTab});
    padding: 0;
  }

  @media (min-width: 1024px) {
    background-image: url(${BgCrewDesk});
  }
  .titleCrew {
    padding-top: 112px;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      padding-top: 136px;
      margin-bottom: 60px;
      justify-content: flex-start;
      padding-left: 38.5px;
    }
    @media (min-width: 1024px) {
      max-width: 1500px;
      padding-left: 5%;
      padding-top: 212px;
      margin: 0 auto 154px auto;
    }
    h2 {
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
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 3.375px;
        text-align: left;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 4.7px;
        text-align: left;
      }
    }
    .titleText {
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
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 3.375px;
        text-align: left;
      }

      @media (min-width: 1024px) {
        font-size: 28px;
        font-weight: 400;
        line-height: 34px;
        letter-spacing: 4.7px;
        text-align: left;
      }
    }
  }

  .mainCrew {
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 33px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: column-reverse;
      gap: 40px;
    }

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      gap: 81px;
      max-width: 1500px;
      justify-content: center;
      align-items: center;
      padding: 0 5%;
    }
    .photoBox {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 177.12px;
        height: 222px;

        @media (min-width: 768px) {
          max-width: 456.37px;
          height: 572px;
        }

        @media (min-width: 1024px) {
          width: initial;
          max-width: 568.07px;
          height: 712px;
        }
      }
      hr {
        width: 100%;
        height: 1px;
        background: #383b4b;
        opacity: 0.2;

        @media (min-width: 768px) {
          display: none;
        }
      }
    }
    .crewInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 32px;
      @media (min-width: 768px) {
        flex-direction: column-reverse;
        gap: 40px;
        align-items: flex-start;
      }

      @media (min-width: 1024px) {
        gap: 120px;
        justify-content: flex-start;
      }
      .crewRole {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        @media (min-width: 1024px) {
          gap: 27px;
          align-items: flex-start;
        }
        .name {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 8px;
          @media (min-width: 1024px) {
            gap: 15px;
            align-items: flex-start;
          }

          h2 {
            font-family: "Bellefair";
            font-size: 16px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0px;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.5;

            @media (min-width: 768px) {
              font-size: 24px;
              font-weight: 400;
              line-height: 28px;
              letter-spacing: 0px;
              text-align: center;
            }

            @media (min-width: 1024px) {
              font-size: 32px;
              font-weight: 400;
              line-height: 37px;
              letter-spacing: 0px;
              text-align: left;
            }
          }

          h1 {
            font-family: "Bellefair";
            font-size: 24px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            color: #ffffff;
            text-transform: uppercase;

            @media (min-width: 768px) {
              font-size: 40px;
              font-weight: 400;
              line-height: 46px;
              letter-spacing: 0px;
              text-align: center;
            }

            @media (min-width: 1024px) {
              font-size: 56px;
              font-weight: 400;
              line-height: 64px;
              letter-spacing: 0px;
              text-align: left;
            }
          }
        }
        p {
          font-family: "Barlow";
          max-width: 327px;
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: 0px;
          text-align: center;
          color: #d0d6f9;
          @media (min-width: 768px) {
            font-size: 16px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0px;
            text-align: center;
            max-width: 458px;
          }

          @media (min-width: 1024px) {
            font-size: 18px;
            font-weight: 400;
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
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 100%;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    gap: 24px;
  }

  a {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
    @media (min-width: 1024px) {
      width: 15px;
      height: 15px;
    }
  }
  a:hover {
    opacity: 0.5;
  }
`;
