import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiGlobe } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Language.css";

const languages = [
  {
    title: "en",
  },
  {
    title: "ru",
  },
  {
    title: "uz",
  },
];

const Languages = () => {
  const [activeLang, setactiveLang] = useState(false);

  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("i18nextLng")
  );

  const onChangeLanguage = (value) => {
    localStorage.setItem("i18nextLng", value);
    i18n.changeLanguage(value)
    setSelectedLanguage(value);
    setactiveLang((el) => !el);
  };
  return (
    <div className="languages">
      <div className="navbarpage_language">
        <div
          onClick={() => setactiveLang((el) => !el)}
          className="navbarpage_language-wrapper">
          <CiGlobe className="navbarpage_language-icon" />
          <span style={{ color: "white" }}>
            {/* {languages.find((lan) => lan.type === language).label} */}
          </span>
          <IoMdArrowDropdown className="navbarpage_language-iconArrow" />
        </div>
        <div
          style={
            activeLang
              ? {
                  display: "flex",
                }
              : null
          }
          className="navbarpage_language-bar">
          {languages.map((el, index) => (
            <p onClick={() => onChangeLanguage(el.title)} key={index}>
              {el.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
