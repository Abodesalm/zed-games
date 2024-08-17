"use client";

import { api } from "@/public/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const genres = useSearchParams().get("genres")
    ? `genres=${useSearchParams().get("genres")}`
    : ``;
  const year = useSearchParams().get("year")
    ? `year=${useSearchParams().get("year")}`
    : ``;
  const rank = useSearchParams().get("rank")
    ? `rank=${useSearchParams().get("rank")}`
    : ``;
  const searchStr = `search=${search}`;
  const query = [year, genres, rank, searchStr].join("&");
  useEffect(() => {
    router.push(`/?${query}`);
  }, [search]);
  return (
    <div className="h-[100px] bg-bglight dark:bg-darker flex flex-row justify-center items-center gap-4">
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="input w-[50%] md:w-[70%] focus-visible:outline-none"
      />
    </div>
  );
}
