import React from 'react';
import BrandList from "../components/list/BrandList.jsx";

function Brand() {
    return (
      <main className={'w-screen sub-bg pb-28'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-row py-10 items-center'}>
            <a href="https://sungsimdang.co.kr" className={'mr-3'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_h_btn.png" alt="home_ico"/>
            </a>
            <p className={'font-bold mr-2 text-sm'}>BRAND</p>
            <p className={'font-bold text-xl'}>ㆍ</p>
            <p className={'font-bold ms-2 text-sm'}>BRAND</p>
          </div>

          <h2 className={'font-secondary font-bold text-5xl text-center mb-10'}>BRAND</h2>
          <BrandList/>
        </div>
      </main>
    );
}

export default Brand;