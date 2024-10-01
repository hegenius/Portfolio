import React from 'react';

function About() {
  return (
    <main className={'sub-bg'}>
      <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s11_visual.jpg"
           alt="1956 밀가루 두 포대의 기적, 대전의 문화가 되다."/>
      <div className={'container mx-auto'}>
        <div className={'flex flex-row py-10 items-center'}>
          <a href="https://sungsimdang.co.kr" className={'mr-3'}>
            <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_h_btn.png" alt="home_ico"/>
          </a>
          <p className={'font-bold mr-2 text-sm'}>ABOUT US</p>
          <p className={'font-bold text-xl'}>ㆍ</p>
          <p className={'font-bold ms-2 text-sm'}>회사소개</p>
        </div>

        <div className={'flex flex-row mb-28'}>
            <div className={'basis-2/5 px-24'}>
              <figure><img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s11_img1a.png"
                           alt=""/>
                <figcaption className={'text-center my-3'}>창업주 故임길순 · 故한순덕 부부</figcaption>
              </figure>
              <figure><img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s11_img1b.png"
                           alt=""/></figure>
            </div>
            <div className={'basis-3/5 leading-loose mt-10 tracking-[-.05em]'}>
              <p className={'mb-10'}>성심당 창업주 故임길순·故한순덕 부부는 함경남도 함주 고향으로<br/>
                1950년 한국전쟁 중 흥남부두 철수작전 마지막 피난민을 싣은 메러디스빅토리호에 <br/>
                기적적으로 몸을 싣어, 잠시 거제도에 머문 뒤 진해에 정착했습니다. <br/>
                이후 서울로 이주하고자 열차를 타고 이동하던 중 열차 고장으로 의도치 않게 대전에 머물게 되었고<br/>
                대흥동성당에서 원조 받은 밀가루 두 포대로 대전역 앞에서 찐빵집을 시작해 <br/>
                오늘날의 성심당이 되었습니다.</p>
              <p><strong>‘우리 가족이 살아 돌아간다면, 남은 인생은 어려운 이웃을 위해 살겠습니다'</strong>라는<br/>
                창업주의 기도를 따라 나눔 정신을 실천하며 <br/>
                대전 시민의 자부심과 사랑으로 성장하여 대전의 향토기업이 된 성심당은<br/>
                앞으로도 '모든 이가 다 좋게 여기는 일을 하도록 하십시오'라는 경영이념을 바탕으로<br/>
                지역사회에 봉사하는 가치 있는 기업이 되겠습니다.</p>
            </div>
          </div>
      </div>

        <div className={'about_bg02 py-28'}>
          <div className={'container mx-auto'}>
          <h3 className={'text-center font-bold text-4xl font-secondary mb-16'}>빵을 통해 더 따뜻한 세상을 만들 수 있을까?</h3>
          <div className={'flex flex-row leading-loose'}>
            <div className={'basis-3/4 ms-24 tracking-[-.05em]'}>
              <p className={'mb-10'}>안녕하세요? 성심당 대표이사 임영진입니다.<br/>
                1956년 대전역 앞 천막집에서 찐빵을 팔던 그때부터 지금까지<br/>우리의 바람은 단 한 가지였습니다.<br/>
                <strong>'우리의 삶으로 주위를 더 이롭게 하는 것.'</strong><br/>
                이 마음은 성심당의 머릿돌이 되어 우리를 움직이게 하고 있으며<br/>
                <strong>성심당의 경영 방식인 EoC(Economy of Communion, 모두를 위한 경제)</strong>와도 맞닿아 있습니다.<br/>
                이는 개인을 넘어 기업이 더 높은 차원의 재화 공유를 실천하는 것이며 그저 성공한 착한 빵집이 아닌, <br/>자신의 직업을 통해 공동선을 이루고 보편적인 형제애를 살아가도록 하는 것입니다.
              </p>

              <p>우리에게 '빵'이란 생계의 유지 수단이기도 하지만 <br/>
                지역 경제와 사랑의 공동체, 빈곤의 문제를 해결하는 또 하나의 가치이며 동력입니다. <br/>
                처음에는 ‘빵으로 무엇을 할 수 있겠나?’라고 생각했습니다. <br/>
                그러나 빵으로도 얼마든지 세상을 바꿀 수 있다는 생각이 듭니다. <br/>
                <strong>성심당은 앞으로도 빵을 통해 '모든 이가 다 좋게 여기는 일'을 할 것이며 <br/>
                  ‘맛있는 빵, 경이로운 빵, 생명의 빵’을 통해 사랑의 문화를 이루어 가겠습니다.</strong></p>
            </div>
            <figure className={'basis-1/4'}><img className={'w-80'} src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s11_img2.png" alt=""/>
              <figcaption className={'text-center mt-5'}>대표이사 <span className={'font-bold text-2xl font-secondary relative sign'}>임 영진</span></figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;









