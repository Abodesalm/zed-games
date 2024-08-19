"use client";
import React, { useEffect, useState } from "react";
import { GrRadialSelected, GrRadial } from "react-icons/gr";

export default function Radio({ name, num, selNum, set }) {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (selNum === num) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selNum]);
  return (
    <div
      className=" w-[fit-content] flex flex-row items-center gap-2 cursor-pointer sm:text-[14px]"
      onClick={() => {
        set(num);
      }}
    >
      {selected ? (
        <GrRadialSelected className="text-accent text-[14px] sm:text-[10px]" />
      ) : (
        <GrRadial className="text-[14px] sm:text-[10px]" />
      )}
      {name}
    </div>
  );
}
