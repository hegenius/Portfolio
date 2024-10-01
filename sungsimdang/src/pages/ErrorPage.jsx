import React from 'react';
import {Link} from "react-router-dom";

function ErrorPage() {
  return (
    <main className={'w-screen sub-bg pb-28'}>
      <div className={'py-16 text-center'}>
        <h1 className={'font-bold text-5xl text-red-600'}>ErrorPage</h1>
        <p className={'text-2xl font-bold my-10'}>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다. </p>
        <Link to={'/'}><button type="button" className={'px-5 py-3 text-white bg-black rounded-xl'}>메인으로 가기 + </button></Link>
    </div>
</main>
)
  ;
}

export default ErrorPage;









