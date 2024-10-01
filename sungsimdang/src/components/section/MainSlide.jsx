import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

const MainSlide = () => {
  return (
    <div>
      <Swiper pagination={true}
              modules={[Pagination, Autoplay]}
              autoplay= {{delay:2000}}
              className="mySwiper">
        <SwiperSlide>
        <img
          src='https://sungsimdang.co.kr/data/file/main_img/1794428356_5vJwqGix_dbc5c99f0625591ab54bb54e22056e721e5fa7d2.jpg'
          alt="성심당 메인 이미지01"/>
        </SwiperSlide>
        <SwiperSlide>
        <img
          src="https://sungsimdang.co.kr/data/file/main_img/1794428356_zbp4xY9G_fbfe4e5d745c30a89f0adcf5d24a3687747c698f.jpg"
          alt="성심당 메인 이미지02 1956 밀가루 두 포대의 기적, 대전의 문화가 되다."/></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlide;