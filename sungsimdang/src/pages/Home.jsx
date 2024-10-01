import React from 'react';
import SectionMedia from "../components/section/SectionMedia.jsx";
import SectionSignature from "../components/section/SectionSignature.jsx";
import MainSlide from "../components/section/MainSlide.jsx";
import SectionCulture from "../components/section/SectionCulture.jsx";
import SectionBrand from "../components/section/SectionBrand.jsx";
import SectionFix from "../components/section/SectionFix.jsx";

function Home() {
  return (
    <main className={'w-screen'}>
       {/* 메인 슬라이드 */}
       <MainSlide/>

       {/* 대전의 문화 */}
       <SectionCulture/>

      {/* BG Fixed */}
      <SectionFix/>

      {/* 명예의 전당 */}
      <SectionSignature/>

      {/* MEDIA */}
      <SectionMedia/>

      {/* 패밀리 브랜드 */}
      <SectionBrand/>

    </main>// end
  )
}

export default Home;









