import React from "react";
import {
  LogoFive,
  LogoFour,
  LogoOne,
  LogoThree,
  LogoTwo,
} from "../../../assets/images";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import "./Partner.css";

const partner = [
  {
    id: 1,
    img: LogoOne,
  },
  {
    id: 2,
    img: LogoTwo,
  },
  {
    id: 3,
    img: LogoThree,
  },
  {
    id: 4,
    img: LogoFour,
  },
  {
    id: 5,
    img: LogoFive,
  },
];

function Partner() {
  return (
    <div className="partner">
      <div className="container">
        <h2 className="partner-name">Foydali manbalar</h2>
        <Splide  aria-label="My Favorite Images">
          <SplideSlide>
            {partner.map((evt) => (
              <PlaceholderImage
                styles={{ width: "210px", height: "80px" }}
                src={evt.img}
              />
            ))}
          </SplideSlide>
          <SplideSlide>
            {partner.map((evt) => (
              <PlaceholderImage
                styles={{ width: "210px", height: "80px" }}
                src={evt.img}
              />
            ))}
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Partner;
