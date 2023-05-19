import React, { useState, useEffect } from "react";
import "./About.css";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { CompanyImage } from "../../../assets/images";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../../services/api";
import { useTranslation } from "react-i18next";

function About() {
  const [about, setAbout] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get(`${API_URL}/about`)
      .then((res) => setAbout(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="about">
      {about.map((about) => (
        <div className="container">
          <PlaceholderImage
            styles={{ width: "500px" }}
            src={`${IMAGE_URL}/${about?.image_src}`}
          />
          <div className="about-list">
            <h3 className="about-name">
              {" "}
              {about[`title_${i18next.language}`]}
            </h3>
            <p className="about-text">
              {about[`description_${i18next.language}`]}
            </p>
            {/* <Link className="about-link" to="/about">
            Batafsil
          </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
