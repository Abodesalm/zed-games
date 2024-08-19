"use client";

import { useEffect, useState } from "react";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export default function GenreFilter({ name, genre, setGenre }) {
  const [selected, setSelected] = useState<boolean>();
  useEffect(() => {
    if (selected) setGenre(genre.concat(name));
    else if (!selected)
      setGenre(
        genre.filter((el) => {
          return el !== name;
        })
      );
  }, [selected]);
  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`cursor-pointer flex flex-row items-center gap-1 select-none sm:text-[10px]`}
    >
      {selected ? (
        <GrCheckboxSelected className="text-accentt sm:text-[10px]" />
      ) : (
        <GrCheckbox className=" sm:text-[10px]" />
      )}
      {name}
    </div>
  );
}
