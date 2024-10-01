import {Link} from "react-router-dom";
import React from "react";
import Pagination from "../common/Pagination.jsx";


const eocitems = [
  {id: 1, content: 'EoC 기업의 경영 방침', url:'https://www.eockorea.com/single-post/2019/03/31/eoc-%EA%B8%B0%EC%97%85%EC%9D%98-%EA%B2%BD%EC%98%81-%EB%B0%A9%EB%B2%95'},
  {id: 2, content: '모두를 위한 경제 EoC, 2022 EoC EXPO', url :'https://www.eockorea.com/single-post/%EB%AA%A8%EB%91%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B2%BD%EC%A0%9C-eoc-2022-eoc-expo'},
  {id: 3, content: '모두를 위한 경제., 2022 EoC EXPO (EoC KOREA)', url:'https://www.eockorea.com/home/tags/eocexpo2022'},
  {id: 4, content: '[인터뷰] 김미진 이사 "코로나 경기 침체에도 사랑 경영 실천해야..."', url :'https://news.cpbc.co.kr/article/787578'},
  {id: 5, content: '[인터뷰] 김미진 "`EoC 공유경제`는 나눔과 사랑의 무지개 프로젝트"', url:'https://news.cpbc.co.kr/article/636532'},
  {id: 6, content: '대전역 앞 찐빵집→700여명 직원 기업···"모두가 모두를 위해"', url:'https://www.hellodd.com/news/articleView.html?idxno=98486'},
  {id: 7, content: '"성심당 빵에는 모든 이를 위하는 마음이 담겨 있습니다"', url:'https://news.cpbc.co.kr/article/573221'},
  {id: 8, content: '[로컬에서 온 편지]37. 대전 성심당은 사회적경제 기업인가', url:'https://www.eroun.net/news/articleView.html?idxno=26139'},
];



const EoCList = () => {
  return (
    <article className={'mx-auto w-2/5'}>
      {eocitems.map(item => (
        <Link to={item.url} className={'my-3'}>
          <div className={'flex flex-row py-5 border-b border-[#E2D1BF] justify-between px-2.5'}>
            {item.content}
            <span><img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/skin/latest/latest_paging/img/s21_img6.png" alt="첨부파일아이콘" /></span>
          </div>
        </Link>
      ))}

      <Pagination/>
    </article>


  );
};

export default EoCList;