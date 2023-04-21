import React from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Header.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { OITSImage, StigmaImage } from "../../../assets/images";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img className="header-img" src={OITSImage} />
          <div className="container">
            <div className="header-list">
              <h2 className="header-name">Sog’ligimiz qo’limizda</h2>
              <p className="header-text">
                Taxminlarga ko'ra, 2019 yilda OIV bilan kasallanganlar soni
                dunyo bo'ylab 38,9 millionga etadi. 690 000 kishi OITS bilan
                bog'liq kasalliklardan vafot etdi. – Odamning immunitet
                tanqisligi...
              </p>
              <Link className="header-link" to="/">
                Batafsil
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="header-img" src={StigmaImage} />
          <div className="container">
            <div className="header-list">
              <h2 className="header-name">Stigma va diskriminasiya</h2>
              <p className="header-text">
                2003 yilda Birlashgan Millatlar Tashkiloti Xalqaro OITSga qarshi
                kurash kunini e'lon qildi, "stigma va diskriminatsiya" atamasi
                2003-2004 yillarda chetga surildi....
              </p>
              <Link className="header-link" to="/">
                Batafsil
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Header;
