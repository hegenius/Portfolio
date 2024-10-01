import React from "react";

function SectionCulture() {
  return (
    <section className={'w-screen py-6 section01BG'}>
      <div className={'container mx-auto flex flex-row items-center'}>
        <figure className={'w-[50%]'} >
          <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/m_about.png"
               alt="성심당 이미지"/>
        </figure>
        <div className="txt_wrap leading-loose tracking-[-.05em]">
          <h3 className={'font-secondary text-4xl mb-6'}>성심당은 대전의 문화입니다.</h3>
          <p className={'mb-5'}>1956년, 대전역 앞 작은 찐빵집에서 시작된 성심당은<br/>대전시민의 자부심과 사랑으로 성장하여 대전을 대표하는 향토기업이 되었습니다.
          </p>
          <p>우리는 가톨릭 정신을 바탕으로 지역 사회에 봉사하는 가치 있는 기업이 되며,<br/>'맛있는 빵, 경이로운 빵, 생명의 빵' 을 통해 '사랑의 문화' 를 이루어 가겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionCulture;