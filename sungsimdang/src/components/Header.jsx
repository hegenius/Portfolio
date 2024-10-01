import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className={'w-screen text-center bg-black'}>
      {/* header-top start */}


      <div className="top_wrap">
        <div className={'py-5 border-b border-b-neutral-800'}>
          <Link to={'/'}>
            <h1 className={'mx-auto max-w-40'}><img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/top_logo.svg" alt="성심당 로고"/></h1>
          </Link>
        </div>

        <div className="ico_wrap justify-end">
          <ul>
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
          <a href="https://sungsimdang.co.kr/page/51" className="rec">인재채용</a>
          <a href="https://www.sungsimdangmall.co.kr/" target="_blank" className="shop"><img
            src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_shop_ico.svg" width="21px"
            alt=""/>성심당 쇼핑몰</a>
        </div>
      </div>
      {/* header-top end */}

      {/* nav start */}
      <div className={'w-screen py-3'}>
        <ul className={'container mx-auto text-white flex flex-row'}>
          <li className={'basis-1/5 font-thirdly font-bold'}><Link to={'/about'}>ABOUT US</Link></li>
          <li className={'basis-1/5 font-thirdly font-bold'}><Link to={'/ourway'}>OUR WAY</Link></li>
          <li className={'basis-1/5 font-thirdly font-bold'}><Link to={'/brand'}>BRAND</Link></li>
          <li className={'basis-1/5 font-thirdly font-bold'}><Link to={'/mediahub'}>MEDIA HUB</Link></li>
          <li className={'basis-1/5 font-thirdly font-bold'}><Link to={'/product'}>PRODUCT</Link></li>
        </ul>
      </div>
      {/* nav end */}
    </header>
  );
}

export default Header;