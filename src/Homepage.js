import React from "react";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import AboutBanner from "./Components/AboutBanner/AboutBanner";
import BannerForChapter from "./Components/BannerForChapter/BannerForChapter";

import Fade from "react-reveal/Fade";
import Section2 from "./Components/Section/Section2";


const Homepage = () => {
  return (
    <>
      <Fade top>
        <Header />
      </Fade>

      <Section />
      <Fade>
        <AboutBanner />
      </Fade>
      <Fade left>
      <Section2/>
      </Fade>
      <Fade>
        <div
          style={{
            background: "darkblue",
            border: "2px solid white",
            padding: ".8em",
            fontFamily: "myFont",
            marginBottom: "1rem",
          }}
        >
          <h3
            style={{
              margin: "0",
              color: "white",
              paddingLeft: "2rem",
              fontSize: "2.5rem",
            }}
          >
            Chapters
          </h3>
        </div>
      </Fade>
      <Fade>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "1rem",
            rowGap: "1.5rem",
            justifyContent: "center",
         padding:"10px 1rem"
          }}
        >
          <Fade bottom>
            <BannerForChapter text="Chapter 1" id="1" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 2" id="2" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 3" id="3" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 4" id="4" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 5" id="5" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 6 " id="6" />
          </Fade>
          <Fade bottom>
            <BannerForChapter text="Chapter 7" id="7" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 8" id="8" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 9" id="9" />
          </Fade>

          <Fade bottom>
            <BannerForChapter text="Chapter 10" id="10" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 11" id="11" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 12" id="12" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 13" id="13" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 14" id="14" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 15" id="15" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 16" id="16" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 17" id="17" />
          </Fade>

          <Fade bottom>
            {" "}
            <BannerForChapter text="Chapter 18" id="18" />
          </Fade>
        </div>
      </Fade>
      <br />
    </>
  );
}

export default Homepage;
