import {Swiper, SwiperSlide} from "swiper/react";
import React from "react";
import {Autoplay} from "swiper/modules";
import {useItems} from "../list/SignatureList.jsx";



const ContentSlider = () => {
  const items = useItems();

  return (
    <Swiper
      spaceBetween={40} // 슬라이드 간의 간격
      slidesPerView={4} // 한 번에 보이는 슬라이드 수
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }} // 자동 슬라이드 시간 설정
      className={'mySwiper'}>

      {items.map(item => (
        <SwiperSlide key={item.id}>
          <img className={'mx-auto w-full'} src={item.image} alt={item.title}/>
          <h4 className={'text-xl font-bold mt-6 mb-4'}>{item.title}</h4>
          <p className={'w-3/4 break-keep mx-auto text-sm text-gray-600'}>{item.content}</p>
        </SwiperSlide>
      ))}
    </Swiper>

  );
};

export default ContentSlider;