import React from "react";
import "./News.css";
import NewsImage from "../../../assets/images/news.jpg";
import PlaceholderImage from "../../atoms/PlaceholderImage";

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
  return (
    <div className="news">
      <div className="container">
        <h2 className="news-name">Yangiliklar</h2>
        <div className="news-page">
          {news.map((news) => (
            <div className="news-list">
              <PlaceholderImage
                styles={{ borderRadius: "5px" }}
                src={news.img}
                alt={news.title}
              />
              <h3 className="news-subname">{news.title}</h3>
              <p className="news-text">{news.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
