import React from 'react';

function Product() {
    return (
      <main className={'w-screen sub-bg pb-28'}>
        <div className={'container mx-auto'}>
          <div className={'flex flex-row py-10 items-center'}>
            <a href="https://sungsimdang.co.kr" className={'mr-3'}>
              <img src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/h_h_btn.png" alt="home_ico"/>
            </a>
            <p className={'font-bold mr-2 text-sm'}>PRODUCT</p>
            <p className={'font-bold text-xl'}>ㆍ</p>
            <p className={'font-bold ms-2 text-sm'}>PRODUCT</p>
          </div>

          {/*<h2 className={'font-secondary font-bold text-5xl text-center mb-10'}>PRODUCT</h2>*/}
          <div className={'p-10'}>
            <img className={'px-32'}
                 src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/s61_img_20240709.jpg" alt=""/>
            {/*<img className="mo_img"*/}
            {/*     src="https://sungsimdang.co.kr/theme/responsive_sungsimdang/include/img/mo_s61_img_20240709.jpg"*/}
            {/*     alt=""/>*/}
          </div>
        </div>
      </main>
    );
}

export default Product;

