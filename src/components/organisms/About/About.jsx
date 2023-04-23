import React from "react";
import "./About.css";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { CompanyImage } from "../../../assets/images";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="container">
        <PlaceholderImage styles={{ width: "500px" }} src={CompanyImage} />
        <div className="about-list">
          <h3 className="about-name">Markaz haqida</h3>
          <p className="about-text">
            Respublikada birinchi marta Sobiq Sovet Vazirlignining 1987 yil 13
            martidagi № 1124 farmoyishi bilan Toshkent shahrida Respublika OITS
            diagnostika markazi Samarqandda esa OITS diagnostik laboratoriyasi
            tashkil etildi. 1988 yildan buyon respublikamizning barcha boshqaruv
            hududlarida OITS diagnostika laboratoriyalari ishga tushirildi. 1989
            yildan boshlab ushbu markaz OITSga...
          </p>
          <Link className="about-link" to="/about">
            Batafsil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
