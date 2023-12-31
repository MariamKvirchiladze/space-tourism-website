import styled from "styled-components";
import Header from "../header/Header";
import bgDestMob from "/assets/destination/background-destination-mobile.jpg";
import bgDestTab from "/assets/destination/background-destination-tablet.jpg";
import bgDestDesk from "/assets/destination/background-destination-desktop.jpg";
import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../../data.json";

const Destination = (): JSX.Element => {
  const parameter = useParams();
  const location = useLocation();
  const planetInfo = data.destinations.find(
    (item: any) => item.name.toLowerCase() === parameter.planets
  );

  const photo = `.${planetInfo?.images.webp}`;

  const [currentPage, setCurrentPage] = useState<string>("moon");
  useEffect(() => {
    const address = location.pathname;
    const PageNow = address.split("/")[2];
    setCurrentPage(PageNow);
  }, [location]);
  return (
    <DestionationContainer>
      <Header />
      <div className="titleDest">
        <h3>01</h3>
        <p className="textDest"> pick your destination</p>
      </div>
      <div className="mainDest">
        <img src={photo} />
        <div className="chooseDest">
          <Navdiv currentPage={currentPage}>
            <Link to="/Destination/moon">
              MOON <div className="hover moon"> </div>
            </Link>
            <Link to="/Destination/mars">
              MARS <div className="hover mars"> </div>
            </Link>
            <Link to="/Destination/europa">
              EUROPA <div className="hover europa"> </div>
            </Link>
            <Link to="/Destination/titan">
              TITAN <div className="hover titan"> </div>
            </Link>
          </Navdiv>

          <div className="planetInfo">
            <h1>{planetInfo?.name}</h1>
            <p className="info">{planetInfo?.description}</p>
          </div>
          <hr />
          <div className="timeAndkm">
            <div className="dist">
              <h3 className="text"> AVG. DISTANCE</h3>
              <h2 className="num"> {planetInfo?.distance}</h2>
            </div>
            <div className="dist">
              <h3 className="text"> EST. TRAVEL TIME</h3>
              <h2 className="num"> {planetInfo?.travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </DestionationContainer>
  );
};

export default Destination;

const DestionationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 0 24px;
  align-items: center;
  background-image: url(${bgDestMob});
  gap: 32px;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 768px) {
    padding: 0px;
    gap: 64px;
    background-image: url(${bgDestTab});
    padding-bottom: 62px;
  }

  @media (min-width: 1024px) {
    gap: 97px;
    background-image: url(${bgDestDesk});
    padding-bottom: 112px;
  }

  .titleDest {
    padding-top: 112px;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      justify-content: flex-start;
      padding-left: 38.5px;
      padding-top: 136px;
    }
    @media (min-width: 1024px) {
      max-width: 1500px;
      padding-left: 5%;
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
    .textDest {
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

  .mainDest {
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    gap: 31px;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      gap: 47px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      gap: 81px;
      max-width: 1500px;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
    }
    img {
      width: 170px;
      height: 170px;
      @media (min-width: 768px) {
        width: 300px;
        height: 300px;
      }
      @media (min-width: 1024px) {
        width: 445px;
        height: 445px;
      }
    }
    .chooseDest {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 32px;
      @media screen and (min-width: 768px) {
        gap: 48px;
      }
      @media screen and (min-width: 1024px) {
        max-width: 445px;
        align-items: flex-start;
        gap: 53px;
      }
      hr {
        background: #383b4b;
        width: 100%;
        height: 1px;
        border: none;

        @media screen and (min-width: 768px) {
          margin-bottom: -20px;
        }
        @media screen and (min-width: 1024px) {
          margin-bottom: -28px;
        }
      }

      .planetInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1px;
        @media screen and (min-width: 768px) {
          gap: 8px;
        }
        @media screen and (min-width: 1024px) {
          align-items: flex-start;
        }
        h1 {
          color: white;
          text-transform: uppercase;
          font-family: Bellefair;
          font-size: 56px;
          font-weight: 400;
          line-height: 64px;
          text-align: center;
          @media screen and (min-width: 768px) {
            font-size: 80px;
            line-height: 92px;
          }
          @media screen and (min-width: 1024px) {
            font-size: 100px;
            line-height: 114.5px;
          }
        }
        p {
          font-family: Barlow;
          font-size: 15px;
          font-weight: 400;
          line-height: 25px;
          color: #d0d6f9;
          text-align: center;
          @media screen and (min-width: 768px) {
            max-width: 580px;
            font-size: 16px;
            line-height: 28px;
          }
          @media screen and (min-width: 1024px) {
            text-align: left;
            font-size: 18px;
            line-height: 32px;
          }
        }
      }
      .timeAndkm {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: center;
        @media screen and (min-width: 768px) {
          flex-direction: row;
          max-width: 573px;
          gap: 11px;
          margin-bottom: 62px;
        }

        .dist {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 12px;
          @media screen and (min-width: 768px) {
            width: 216px;
          }
          @media screen and (min-width: 1024px) {
            align-items: flex-start;
          }
          .text {
            font-family: Barlow Condensed;
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            letter-spacing: 2.36px;
            text-align: center;
            color: #d0d6f9;
            text-transform: uppercase;
          }
          .num {
            font-family: Bellefair;
            font-size: 28px;
            font-weight: 400;
            line-height: 32px;
            color: white;
            text-align: center;
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
const Navdiv = styled.nav<{ currentPage: string }>`
  width: 240px;
  display: flex;
  gap: 27px;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 285px;
    gap: 35px;
  }

  a {
    font-family: Barlow Condensed;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 2.36px;
    color: #d0d6f9;
    text-decoration: none;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;
    }
    @media screen and (min-width: 1024px) {
      position: relative;
    }
  }
  .hover {
    height: 3px;
    display: none;
    background-color: white;
    position: absolute;
    bottom: -12px;
    width: 100%;
  }
  a {
    position: relative;
    cursor: pointer;
  }
  a:hover .hover {
    width: 100%;
    display: block;
    opacity: 0.5;
  }
  .moon {
    display: ${(props) => (props.currentPage === "moon" ? "block" : "none")};
  }

  .mars {
    display: ${(props) => (props.currentPage === "mars" ? "block" : "none")};
  }

  .europa {
    display: ${(props) => (props.currentPage === "europa" ? "block" : "none")};
  }

  .titan {
    display: ${(props) => (props.currentPage === "titan" ? "block" : "none")};
  }
`;
