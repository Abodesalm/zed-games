import axios from "axios";
import Card from "@/components/Card";
import { api } from "@/public/data";
import Pageination from "@/components/Pageination";
import Search from "./Search";

export default async function Container({ endpoint, searchParams, pageUrl }) {
  // Variables
  const page = searchParams.page ? `page=${searchParams.page}` : `page=1`;
  const rank = searchParams.rank && `rank=${searchParams.rank}`;
  const search = searchParams.search ? `search=${searchParams.search}` : null;
  const genres = searchParams.genres ? `genres=${searchParams.genres}` : null;
  const year = searchParams.year ? `release=${searchParams.year}` : null;
  const fields = "fields=photo,name,genres,release";
  const query = [year, genres, rank, search, page, fields].join("&");
  const lastEndpoint = `${endpoint}?${query}`;

  // Fetch
  const data = await fetch(lastEndpoint, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err.response));
  // Render
  return (
    <>
      <Search />
      <div className="pad min-h-[70vh] w-full flex justify-between items-center flex-wrap gap-8 ">
        {data.data ? (
          data.data.data.map((game) => {
            return (
              <Card
                name={game.name}
                photo={game.photo}
                genres={game.genres}
                id={game.id}
                key={game.id}
              />
            );
          })
        ) : (
          <p>No Results Found!</p>
        )}
      </div>
      <Pageination url={pageUrl} results={data.results} />
    </>
  );
}
