import React from "react";
import "./Process.css";
import { ImageOne, ImageThree, ImageTwo } from "../../../assets/images";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../../services/api";

const process = [
  {
    id: 1,
    img: ImageOne,
    title: "PSIXOLOGIK YORDAM",
  },
  {
    id: 2,
    img: ImageTwo,
    title: "Siz bilmagan haqiqat",
  },
  {
    id: 3,
    img: ImageThree,
    title: "AKSIYALAR",
  },
];

function Process() {
  const [t, i18next] = useTranslation();
  const [action, setAction] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/actions`)
      .then((res) => setAction(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="process">
      <div className="container">
        <p className="process-subname">
          Namangan viloyati OITSga qarshi kurashish markazi
        </p>
        <h2 className="process-name">Jarayon</h2>
        <div className="process-page">
          {action.map((evt) => (
            <div className="process-list">
              <PlaceholderImage
                styles={{ width: "350px", height: "250px" }}
                src={`${IMAGE_URL}/${evt?.image_src}`}
              />
              <h3 className="process-names">
                {evt[`title_${i18next.language}`]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
