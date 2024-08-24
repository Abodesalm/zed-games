import { imagesAPI } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import Genre from "./Genre";

export default function Card({ name, id, photo, genres }) {
  return (
    <Link
      href={`/${id}`}
      className={
        "w-[180px] min-h-[300px] flex flex-col justify-between items-center gap-1 text-center border-2 border-accent rounded-[10px] p-1 text-dark dark:text-white text-[12px] sm:w-[150px] sm:min-h-[250px] capitalize         "
      }
    >
      <Image
        src={`${imagesAPI}/${photo}`}
        alt="game poster image"
        width={170}
        height={245}
        loading="eager"
        className={`w-[170px] h-[245px] sm:w-[140px] sm:h-[210px] bg-gray-500 rounded-[6px]`}
      ></Image>
      <p>{name}</p>
      <div className="w-full flex flex-row justify-evenly">
        {genres.slice(0, 3).map((genre) => {
          return (
            <Genre
              title={genre}
              key={genre}
              clas={`flex items-center ${
                genre.length >= 9 ? "text-[8px]" : "text-[10px] sm:text-[9px]"
              }`}
            />
          );
        })}
      </div>
    </Link>
  );
}
