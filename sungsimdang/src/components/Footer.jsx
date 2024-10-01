import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className={'w-screen bg-neutral-900 py-16'}>
        <div className={'container mx-auto'}>
          <Link to={'/'}><h1 className={'max-w-36'}><img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/top_logo.svg" alt="성심당 로고"/></h1></Link>
          <div className={'flex flex-row mt-14 text-gray-400 leading-relaxed'}>
            {/* left */}
            <div className={'basis-4/5'}>
              <ul className={'flex flex-row'}>
                <li className={'mr-3'}><a href="#null">이용약관</a></li>
                <li className={'text-orange-300'}><a href="#null">개인정보처리방침</a></li>
              </ul>
              <p><span className={'mr-5'}>로쏘 주식회사</span><span className={'mr-5'}>대표. 임영진</span><span className={'mr-5'}>사업자등록번호. 305-81-48738</span><span>주소. 대전광역시 중구 대종로 480번길 15</span></p>
              <p><span className={'mr-5'}>Tel. 1588-8069</span><span className={'mr-5'}>Fax. (042) 257-2984</span><span>E-mail. bread@sungsimdang.co.kr</span></p>
              <p>COPYRIGHT© SUNG SIM DANG Co.,Ltd. ALL RIGHT RESERVED</p>
            </div>

            {/*  right */}
            <div className={'basis-1/5 text-right'}>
              <h3 className={'text-4xl font-bold mb-1 text-orange-300'}>1588-8069</h3>
              <p className={'font-bold'}>문의시간 09:00 ~ 17:00</p>
              <ul className={'flex justify-end gap-4 mt-4 text-orange-300'}>
                <li>
                  <Link to={'https://www.instagram.com/sungsimdang_official/'} target="_blank"><i
                    className="xi-instagram"></i></Link>
                </li>
                <li>
                  <Link to={'https://www.facebook.com/sungsimdang4114'} target="_blank"><i
                    className="xi-facebook"></i></Link>
                </li>
                <li>
                  <Link to={'https://www.youtube.com/@user-xj9of3bh5m'} target="_blank"><i
                    className="xi-youtube-play"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;