import {Link} from "react-router-dom";
import React from "react";

const tableaitems = [
  {id: 5, notice:'공지', url:'https://sungsimdang.co.kr/53/24', title: '정부포상(선거문화발전 유공) 후보자 공개검증', date:'2024.02.14'},
  {id: 4, notice :'공지', url:'https://sungsimdang.co.kr/53/22', title: '성심당 상품권 안내', date:'2023.07.17'},
  {id: 3, num: '3',url:'https://sungsimdang.co.kr/53/21', title: '성심당 고객주차장 안내', date:'2023.01.01'},
  {id: 2, num: '2', url:'https://sungsimdang.co.kr/53/19', title: '설 연휴 정상영업', date:'2023.01.20'},
  {id: 1, num: '1', url:'https://sungsimdang.co.kr/53/20', title: '2023 성심당 시무식 - 매장 조기마감', date:'2023.01.01'},
];

const TableList = () => {
  return (
  <table className={'w-full border-collapse'}>
    <thead>
    <tr>
      <th scope={'col'} className={'py-5'}>번호</th>
      <th scope={'col'} className={'py-5'}>제목</th>
      <th scope={'col'} className={'py-5'}>등록일</th>
    </tr>
    </thead>
    <tbody>
    {tableaitems.map(item => (
        <tr key={item.id} >
          <td className={'text-center py-5'}>
            {item.num}
            <span className={'bg-orange-950 rounded-full px-3 py-1 text-white txtbg'}>{item.notice}</span>
          </td>
          <td className={'py-5'}><Link to={item.url} className={'my-3'}>{item.title}</Link></td>
          <td className={'text-center py-5'}>{item.date}</td>
        </tr>
    ))}
    </tbody>
  </table>
  )
    ;
};

export default TableList;