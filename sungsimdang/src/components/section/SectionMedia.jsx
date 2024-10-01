import React from "react";
import MediaList from "../list/MediaList.jsx";

function SectionMedia() {
  return (
    <section className={'py-20'}>
      <div className={'container mx-auto text-center'}>
        <h3 className={'text-4xl'}>성심당 <strong>MEDIA</strong></h3>
        <p className={'text-amber-950 font-bold mt-3 text-lg mb-12'}>SUNGSIMDANG MEDIA</p>
        <MediaList/>
        </div>
    </section>
);
}

export default SectionMedia;
