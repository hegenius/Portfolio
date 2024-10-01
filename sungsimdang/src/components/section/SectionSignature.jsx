import React from "react";
import 'swiper/css';
import ContentSlider from "../common/ContentSlider.jsx";
import {ItemProvider} from "../list/SignatureList.jsx";


  const SectionSignature = () => {

    return (
      <section className={'bg-red-50 py-20'}>
        <div className={'container mx-auto text-center'}>
          <h3 className={'text-4xl'}>성심당 <strong>명예의 전당</strong></h3>
          <p className={'text-amber-950 font-bold mt-3 mb-12 text-lg'}>SUNGSIMDANG SIGNATURE</p>
          <ItemProvider>
            <ContentSlider />
          </ItemProvider>
        </div>
      </section>
    )
    ;
  };

export default SectionSignature;
