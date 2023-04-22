import React from "react";
import "./Process.css";
import { ImageOne, ImageThree, ImageTwo } from "../../../assets/images";
import PlaceholderImage from "../../atoms/PlaceholderImage";

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
  return (
    <div className="process">
      <div className="container">
        <p className="process-subname">
          Namangan viloyati OITSga qarshi kurashish markazi
        </p>
        <h2 className="process-name">Jarayon</h2>
        <div className="process-page">
          {process.map((evt) => (
            <div className="process-list">
              <PlaceholderImage
                styles={{ width: "350px", height: "250px" }}
                src={evt.img}
                alt={evt.title}
              />
              <h3 className="process-names">{evt.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
