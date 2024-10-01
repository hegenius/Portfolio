import React from "react";
import BrandList from "../list/BrandList.jsx";

function SectionBrand() {
  return (
    <section className={'bg-red-50 py-20'}>
      <div className={'container mx-auto text-center'}>
        <h3 className={'text-4xl'}>성심당 <strong>패밀리브랜드</strong></h3>
        <p className={'text-amber-950 font-bold mt-3 mb-12 text-lg'}>SUNGSIMDANG FAMILY BRAND</p>
        <BrandList/>
      </div>
    </section>
  );
}

export default SectionBrand;