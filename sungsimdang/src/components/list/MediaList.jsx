import React from "react";
import {Link} from "react-router-dom";

const mediaitems = [
  {id: 1, title: '성심당 문화원', url:'https://youtu.be/eLPqn5cSY-o', image: 'https://sungsimdang.co.kr/data/file/main_video/thumb-1794428356_ylnJN2YD_d537844c9662f98df65bbfad438db623a4e7a4e5_415x500.jpg'},
  {id: 2, title: '우리가 사랑한 빵집 성심당', url:'https://youtu.be/Bwv6xw_SHYk', image: 'https://sungsimdang.co.kr/data/file/main_video/thumb-1794428356_wWC4UKTD_a17baa589b4ccc44818138e68ba2e0cb31df1725_415x500.jpg'},
  {id: 3, title: '성심당 창업 60주년 기념 전시', url:'https://youtu.be/XwiPDY5hFyU', image: 'https://sungsimdang.co.kr/data/file/main_video/thumb-1794428356_a6H8Nsnw_d2feb0aa32dba404c88b651cec2d0dd96ed773eb_415x500.jpg'},
];

const MediaList = () => {
  return (
    <div className={'grid grid-cols-3 gap-x-10'}>
      {mediaitems.map(item => (
        <Link to={item.url} className={'my-3'} target={"_blank"}>
          <div key={item.id}>
            <img className={'mx-auto w-full'} src={item.image} alt={item.title}/>
            <p className={'font-bold text-xl mt-6'}>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MediaList;

