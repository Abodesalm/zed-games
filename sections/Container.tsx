"use client";

import axios from "axios";
import Card from "@/components/Card";
import { api } from "@/public/data";
import Pageination from "@/components/Pageination";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Container({ endpoint, sp, pageUrl }) {
  // Variables
  /* const page = sp.page ? `page=${sp.page}` : `page=1`;
  const rank = sp.rank ? `rank=${sp.rank}`:'';
  const search = sp.search ? `search=${sp.search}` : '';
  const genres = sp.genres ? `genres=${sp.genres}` : '';
  const year = sp.year ? `release=${sp.year}` : ''; */

  const [page, setPage] = useState(sp.page ? `page=${sp.page}` : `page=1`);
  const [rank, setRank] = useState(sp.rank ? `rank=${sp.rank}` : "");
  const [search, setSearch] = useState(sp.search ? `search=${sp.search}` : "");
  const [year, setYear] = useState(sp.year ? `release=${sp.year}` : "");
  const [genres, setGenres] = useState(sp.genres ? `genres=${sp.genres}` : "");

  const fields = "fields=photo,name,genres,release";
  const queryStuffs = [year, genres, rank, search, page, fields];
  const query = queryStuffs.join("&");
  const lastEndpoint = `${endpoint}?${query}`;
  const router = useRouter();
  useEffect(() => {
    router.push(`/?${queryStuffs.slice(0, -1).join("&")}`);
  }, [query]);

  //Fetch
  const [data, setData] = useState({
    data: { data: [{ name: "", genres: [], photo: "", id: "" }] },
    results: 0,
  });
  useEffect(() => {
    async function fetchData() {
      let theData = await fetch(lastEndpoint, { cache: "no-store" })
        .then((theData) => theData.json())
        .catch((err) => console.error(err));
      setData(theData);
    }
    fetchData();
  }, [lastEndpoint]);

  // Render
  return (
    <>
      <Search
        setSearchStr={setSearch}
        setRankStr={setRank}
        setYearStr={setYear}
        setGenresStr={setGenres}
      />
      <div className="pad min-h-[70vh] w-full flex justify-between items-center flex-wrap gap-8 ">
        {data.data &&
          data.data?.data.map((game) => {
            return (
              <Card
                name={game.name}
                photo={game.photo}
                genres={game.genres}
                id={game.id}
                key={game.id}
              />
            );
          })}
      </div>
      <Pageination
        setPageStr={setPage}
        page={sp.page ? sp.page : 1}
        results={data.results}
        s={search}
        r={rank}
        g={genres}
        y={year}
      />
    </>
  );
}
