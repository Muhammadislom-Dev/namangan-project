import React from "react";
import "./News.css";
import NewsImage from "../../../assets/images/news.jpg";
import PlaceholderImage from "../../atoms/PlaceholderImage";
import { API_URL, IMAGE_URL } from "../../../services/api";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "Марғилон шахрида ВМ нинг 84 сонли қарорини ижроси",
    text: "Ўзбекистон Республикаси Вазирлар Махкамасининг 2022 йил 22-феврал кунидаги “Ўзбекистон Республикасида одам иммунитет танқислиги вируси инфекцияси...",
    img: NewsImage,
  },
  {
    id: 2,
    title: "Марғилон шахрида ВМ нинг 84 сонли қарорини ижроси",
    text: "Ўзбекистон Республикаси Вазирлар Махкамасининг 2022 йил 22-феврал кунидаги “Ўзбекистон Республикасида одам иммунитет танқислиги вируси инфекцияси...",
    img: NewsImage,
  },
  {
    id: 3,
    title: "Марғилон шахрида ВМ нинг 84 сонли қарорини ижроси",
    text: "Ўзбекистон Республикаси Вазирлар Махкамасининг 2022 йил 22-феврал кунидаги “Ўзбекистон Республикасида одам иммунитет танқислиги вируси инфекцияси...",
    img: NewsImage,
  },
];

function News() {
  const [t, i18next] = useTranslation();
  const [action, setAction] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/news`)
      .then((res) => setAction(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="news">
      <div className="container">
        <h2 className="news-name">Yangiliklar</h2>
        <div className="news-page">
          {action.map((news) => (
            <div className="news-list">
              <Link to={`/news/${news.id}`}>
                <PlaceholderImage
                  styles={{
                    borderRadius: "5px",
                    width: "350px",
                    height: "250px",
                    marginTop: "-10px",
                  }}
                  src={`${IMAGE_URL}/${news?.image_src}`}
                />
                <h3 className="news-subname">
                  {news[`title_${i18next.language}`]}
                </h3>
                <p className="news-text">{news[`text_${i18next.language}`]}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
