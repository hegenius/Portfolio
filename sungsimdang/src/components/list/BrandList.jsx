import React from 'react';
import {Link} from "react-router-dom";

const branditems = [
  {id: 1, title: '성심당 본점', url:'https://sungsimdang.co.kr/31/15', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_mkecVY7P_b300b9d2a1afc1591caa646b7b577c07737a5972.png'},
  {id: 2, title: '성심당 케익부띠끄', url:'https://sungsimdang.co.kr/31/16', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_1tuPJkBD_3d28211101fa1130a5702b7261f59fe516d7b39a.png'},
  {id: 3, title: '성심당 DCC점', url:'https://sungsimdang.co.kr/31/17', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_GLFoM3vt_dd3cd857d833e26b87567f551f61a354b4d02ff7.jpg'},
  {id: 4, title: '성심당 롯데백화점 대전점', url:'https://sungsimdang.co.kr/31/18', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_OD5H32bU_467861efb37d589696868d98f8d9bb883b02a7a9.png'},
  {id: 5, title: '성심당 대전역점', url:'https://sungsimdang.co.kr/31/19', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_izmf9Ovy_0ca12519feb7fa2d51fd776b39f6da70f4742bb8.png'},
  {id: 6, title: '성심당 옛맛솜씨', url:'https://sungsimdang.co.kr/31/24', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_AkicFdnj_df3b7429278f87f9deb781b691f0461146680264.png'},
  {id: 7, title: '성심당문화원', url:'https://sungsimdang.co.kr/31/26', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_PxtkiW3Y_32d0752118de05350ee704d4bd0a127775b781dc.png'},
  {id: 8, title: '테라스키친', url:'https://sungsimdang.co.kr/31/20', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_n4r8JiPT_800733be45218667e6ac37207cfeca189a10f0ce.png'},
  {id: 9, title: '플라잉팬', url:'https://sungsimdang.co.kr/21/', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_xRuV0UW9_18a34545f25ff4da0b3c5ad3c607bd58ff0cded5.png'},
  {id: 10, title: '우동야', url:'https://sungsimdang.co.kr/31/22', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_aODSoxPL_dcc6101bffa54b970951a8f3f702a257381f1915.png'},
  {id: 11, title: '삐아또', url:'https://sungsimdang.co.kr/31/23', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_mwVlJvHp_8bb7fae0e832a96f2b4b4d2ebe846ec9a739b4f0.png'},
  {id: 12, title: '오븐스토리', url:'https://sungsimdang.co.kr/31/25', image: 'https://sungsimdang.co.kr/data/file/31/1794428356_q0IuBFUR_a347584d1c6dee64f79b9583be4f0ea3ae70aa3f.png'},
];

const BrandList = () => {
  return (
      <div className={'grid grid-cols-4 gap-8'}>
        {branditems.map(item => (
          <Link to={item.url} className={'my-3'}>
            <div key={item.id} className={'relative'}>
              <img className={'mx-auto w-full'} src={item.image} alt={item.title}/>
              <p className={'w-full py-2 absolute bottom-0 bg-black text-center'}>
                <span className={'text-white font-bold '}>{item.title}</span>
              </p>
            </div>
          </Link>
          ))}
      </div>
  );
};

export default BrandList;
