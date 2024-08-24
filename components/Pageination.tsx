"use client";

import { useEffect, useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

export default function Pageination({ results, setPageStr, page, s, r, g, y }) {
  const [pagee, setPagee] = useState<number>();

  useEffect(() => {
    setPagee(1);
  }, [s, r, g, y]);

  useEffect(() => {
    setPageStr(pagee ? `page=${pagee}` : `page=1`);
  }, [pagee]);

  return (
    <div className="w-[240px] h-[100px] bg-bglight dark:bg-darker flex flex-row justify-evenly items-center rounded-[10px] mx-auto mb-4">
      <button
        className="w-[50px] h-[50px] input btn-hover"
        id="previous"
        onClick={() => {
          page > 1 ? setPagee(+page - 1) : setPagee(1);
        }}
      >
        <BiArrowToLeft />
      </button>
      <div className="w-[50px] h-[50px] input bg-accentt text-darker">
        {page ? page : 1}
      </div>
      <button
        className="w-[50px] h-[50px] input btn-hover"
        id="next"
        onClick={() => {
          results === 14 ? setPagee(+page + 1) : setPagee(page);
        }}
      >
        <BiArrowToRight />
      </button>
    </div>
  );
}
