import React from 'react';
import EoCList from "../components/list/EoCList.jsx";

function OurWay() {
  return (
    <main className={'w-screen sub-bg pb-28'}>
      <div className={'container'}>
        <div className={'flex flex-row py-10 items-center'}>
          <a href="https://sungsimdang.co.kr" className={'mr-3'}>
            <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_h_btn.png" alt="home_ico"/>
          </a>
          <p className={'font-bold mr-2 text-sm'}>OUR WAY</p>
          <p className={'font-bold text-xl'}>ㆍ</p>
          <p className={'font-bold ms-2 text-sm'}>EoC(모두를 위한 경제)</p>
        </div>
      </div>


      {/* 컨텐츠 */}
      <article>
        <div className={'flex flex-row items-center text-center mb-10 justify-center'}>
          <img className={'w-30'} src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s21_log.png"
               alt="ec로고"/>
          <p className={'font-bold text-6xl font-secondary ms-5'}>모두를 위한 경제</p>
        </div>
        <p className={'text-center text-2xl'}>1999년, 성심당은 <span className={'text-red-700'}>모두를 위한경제 EoC(Economy of Communion)</span>를
          만나<br/>
          사랑과 나눔의 경영방식을 이루어 가고 있습니다.</p>

        <div className={'mx-auto w-1/2 mt-16'}>
          <ul className={'ourway-ul'}>
            <li className={'ourway-li'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s21_img1.png" alt=""/>
              <p>인간중심의 경제</p>
            </li>
            <li className={'ourway-li'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s21_img2.png" alt=""/>
              <p>사랑과 나눔의 경제</p>
            </li>
            <li className={'ourway-li s21-1-li3'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s21_img3.png" alt=""/>
              <p>공동선을 실현하는 주체</p>
            </li>
            <li className={'ourway-li s21-1-li4 '}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s21_img4.png" alt=""/>
              <p>가난에 대한 사회적책임</p>
            </li>
          </ul>
        </div>

      </article>

      <article>
        <div className={'flex flex-row justify-center my-20 section-bg'}>
          <div className={'py-4 px-10 text-white rounded-full bg-orange-950 mr-5 text-sm'}>
            <a href="http://www.focolare.or.kr/" target="_blank">한국 포콜라레 홈페이지 <span className={'text-2xl'}>&raquo;</span></a></div>
          <div className={'py-4 px-10 text-white rounded-full bg-red-600 mr-5 text-sm'}>
            <a href="https://www.eockorea.com/" target="_blank">EoC KOREA 홈페이지 <span
              className={'text-2xl'}>&raquo;</span></a></div>
          <div className={'py-4 px-10 text-white rounded-full bg-orange-950 mr-5 text-sm'}>
            <a href="https://www.edc-online.org/en/" target="_blank">EoC 공식 홈페이지 <span
              className={'text-2xl'}>&raquo;</span></a></div>
        </div>
      </article>

      <article className={'container'}>
        <h4 className={'font-secondary text-center text-3xl mb-10'}>성심당 EoC 경영실천</h4>

        <p
          className={'grid grid-cols-1 w-1/2 mx-auto font-secondary text-white text-center text-2xl py-6 rounded-full bg-[#B3A07C] mb-10'}>“모든
          이가 다 좋게 여기는 일을 하십시오”</p>
      </article>

      {/* 성심당 EoC 경영실천 게시판 */}
      <EoCList/>

      {/* 영상 */}
      <article className={'mx-auto w-1/2 grid grid-cols-3 gap-8 mt-20 px-5'}>
        <div className={'relative'}>
          <figure>
            <img className={'w-full'}
              src="https://sungsimdang.co.kr/data/file/video/thumb-3552746755_vsZtof5l_50155c5453fd04111753ffdfe597d32d0f3c79d5_210x150.jpg"
              alt="시민경제학자 루이지노 브루니 교수 EoC 강연회"/>
            <figcaption className={'text-center font-bold mt-3'}>시민경제학자 루이지노 브루니 교수<br/>EoC 강연회</figcaption>
          </figure>
        </div>

        <div className={'relative'}>
          <figure>
            <img className={'w-full'}
                 src="https://sungsimdang.co.kr/data/file/video/thumb-3552746755_lEGYcd7U_59b59c5bb2a2e50779689b741d7a843088a944c4_210x150.png"
                 alt="'모두를 위한 경제'···성심당 60년"/>
            <figcaption className={'text-center font-bold mt-3'}>'모두를 위한 경제'···성심당 60년</figcaption>
          </figure>
        </div>

        <div className={'relative'}>
          <figure>
            <img className={'w-full'}
                 src="https://sungsimdang.co.kr/data/file/video/thumb-3552746755_frgIZJNy_a4fc0c3af8514d7a956209826883900eb4b1a954_210x150.jpg"
                 alt="EoC, 모두를 위한 새로운 경제모델"/>
            <figcaption className={'text-center font-bold mt-3'}>EoC, 모두를 위한 새로운 경제모델</figcaption>
          </figure>
        </div>
      </article>
    </main>
  );
}

export default OurWay;

























