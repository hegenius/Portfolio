import React from "react";

function Pagination() {
  return (
    <div>
      <nav className="my-5 text-center" aria-label="Pagination">
        {/*<a href="#"*/}
        {/*   className="relative inline-flex items-center px-2 py-2 text-gray-400  focus:z-20">*/}
        {/*  <span className="text-2xl">&laquo;</span>*/}
        {/*</a>*/}

        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm font-bold focus:z-20">1</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">2</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">3</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">4</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">5</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">6</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">7</a>
        <a href="#" aria-current="page"
           className="relative z-10 inline-flex items-center text-gray-900 px-3 text-sm focus:z-20">8</a>

        <a href="#"
           className="relative inline-flex items-center px-2 text-gray-700 focus:z-20">
          <span className="text-2xl">&raquo;</span>
        </a>
      </nav>
    </div>
  );
}

export default Pagination;