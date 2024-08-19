"use client";

import { useEffect, useState } from "react";
import Radio from "@/components/Radio";
import GenreFilter from "@/components/GenreFilter";
import { allGenres } from "@/public/data";

export default function Search({
  setSearchStr,
  setRankStr,
  setGenresStr,
  setYearStr,
}) {
  const [show, setShow] = useState(false);
  const [selectedRank, setSelectedRank] = useState();

  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState<number>(0);
  const years = [
    1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023, 2024,
  ];

  const reset = () => {
    setGenresStr(``);
    setRankStr(``);
    setYearStr(``);
    setSearchStr(``);
    window.location.reload();
  };

  useEffect(() => {
    setSearchStr(search ? `search=${search}` : "");
  }, [search]);

  useEffect(() => {
    const rank = () => {
      if (selectedRank === 1) return "diamond";
      else if (selectedRank === 2) return "gold";
      else if (selectedRank === 3) return "silver";
    };
    setRankStr(selectedRank ? `rank=${rank()}` : "");
  }, [selectedRank]);

  useEffect(() => {
    if (year == 0) {
      setYearStr(``);
    } else {
      setYearStr(`release=${year}`);
    }
  }, [year]);

  useEffect(() => {
    if (!genres[0]) setGenresStr(``);
    else if (genres) setGenresStr(`genres=${genres.join(",")}`);
  }, [genres]);

  return (
    <div className="min-h-[80px] pad bg-bglight dark:bg-darker flex flex-col justify-center items-center gap-4">
      <div className={`w-full flex flex-row justify-center items-center gap-4`}>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`input w-[70%] md:w-[70%] focus-visible:outline-none`}
        />
        <button
          onClick={() => {
            setShow(!show);
          }}
          className={`py-1 px-2 rounded-[5px] border border-accentt btn-hover sm:font-normal`}
        >
          filters
        </button>
      </div>
      <div
        className={`${
          show ? "h-[140px]" : "h-[0]"
        } overflow-hidden w-full transition-all flex flex-row items-center justify-evenly gap-2`}
      >
        {/* Genres */}
        <div className={`w-[60%] h-[80%]`}>
          <p className="text-[18px] sm:text-[15px]">Genres</p>
          <div className="w-full flex flex-row flex-wrap gap-4 sm:gap-2">
            {allGenres.map((el) => {
              return (
                <GenreFilter
                  name={el}
                  genre={genres}
                  setGenre={setGenres}
                  key={el}
                />
              );
            })}
            {/* {allGenres.map((el) => {
              return (
                <div
                  key={el}
                  className="flex flex-row items-center gap-1 select-none"
                >
                  <input
                    type="checkbox"
                    id={el}
                    name={el}
                    value={el}
                    className="cursor-pointer"
                    onSelect={(e) => {
                      setGenres(genres.concat(e.target.value));
                    }}
                  />
                  <label className="cursor-pointer" htmlFor={el}>
                    {el}
                  </label>
                </div>
              );
            })} */}
          </div>
        </div>

        {/* Rank  */}
        <div className={`w-[20%] sm:w-[50%] h-[80%]`}>
          <p className="text-[18px]  sm:text-[15px]">Rank</p>
          <div className="px-4 w-full">
            <Radio
              num={1}
              selNum={selectedRank}
              set={setSelectedRank}
              name={`diamond`}
            />
            <Radio
              num={2}
              selNum={selectedRank}
              set={setSelectedRank}
              name={`gold`}
            />
            <Radio
              num={3}
              selNum={selectedRank}
              set={setSelectedRank}
              name={`silver`}
            />
            <Radio
              num={0}
              selNum={selectedRank}
              set={setSelectedRank}
              name={`all`}
            />
          </div>
        </div>

        {/* Year */}
        <div className={`w-[10%] h-[80%] sm:w-[16%]`}>
          <p className="text-[18px] sm:text-[15px]">Year</p>
          <select
            onChange={(e) => {
              setYear(+e.target.value);
            }}
            className="cursor-pointer"
          >
            <option value={0}>all</option>
            {years.reverse().map((el) => {
              return (
                <option key={el} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
          <button
            className="btn:hover btn font-normal block mt-8 sm:text-[12px]"
            onClick={reset}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
