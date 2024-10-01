import React from 'react';
// import TableList from "../components/list/TableList.jsx";

function MediaHub() {
    return (
      <main className={'w-screen sub-bg pb-28'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-row py-10 items-center'}>
            <a href="https://sungsimdang.co.kr" className={'mr-3'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_h_btn.png" alt="home_ico"/>
            </a>
            <p className={'font-bold mr-2 text-sm'}>MEDIA HUB</p>
            <p className={'font-bold text-xl'}>ㆍ</p>
            <p className={'font-bold ms-2 text-sm'}>공지사항</p>
          </div>

          <h2 className={'font-secondary font-bold text-5xl text-center mb-10'}>공지사항</h2>
          {/*<TableList/>*/}
          <table className={'w-full table_style'}>
            <thead>
            <tr>
              <th scope={'col'}>번호</th>
              <th scope={'col'}>제목</th>
              <th scope={'col'}>등록일</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span className={'bg-orange-950 rounded-full px-3 py-1 text-white'}>공지</span></td>
              <td>정부포상(선거문화발전 유공) 후보자 공개검증</td>
              <td>2024.02.14</td>
            </tr>
            <tr>
              <td><span className={'bg-orange-950 rounded-full px-3 py-1 text-white'}>공지</span></td>
              <td>성심당 상품권 안내</td>
              <td>2023.07.17</td>
            </tr>
            <tr>
              <td>3</td>
              <td>성심당 고객주차장 안내</td>
              <td>2023.01.01</td>
            </tr>
            <tr>
              <td>2</td>
              <td>설 연휴 정상영업</td>
              <td>2023.01.20</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2023 성심당 시무식 - 매장 조기마감</td>
                <td>2023.01.01</td>
              </tr>
              </tbody>
            </table>
        </div>
      </main>
    );
}

export default MediaHub;
