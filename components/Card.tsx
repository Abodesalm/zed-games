import { imagesAPI } from "@/public/data";
import Image from "next/image";
import Link from "next/link";
import Genre from "./Genre";

export default function Card({ name, id, photo, genres }) {
  return (
    <Link
      href={`/${id}`}
      className={
        "w-[180px] min-h-[300px] flex flex-col justify-between items-center gap-1 text-center border-2 border-accent rounded-[20px] p-1 text-dark dark:text-white text-[12px] sm:w-[150px] sm:h-[250px] capitalize         "
      }
    >
      <Image
        src={`${imagesAPI}/${photo}`}
        alt="game poster image"
        width={160}
        height={260}
        className={`w-[160px] h-[260px] bg-gray-500 rounded-[16px]`}
      ></Image>
      <p>{name}</p>
      <div className="w-full flex flex-row justify-evenly">
        {genres.slice(0, 4).map((genre) => {
          return (
            <Genre
              title={genre}
              key={genre}
              clas={`text-[10px] rounded-[3px]`}
            />
          );
        })}
      </div>
    </Link>
  );
}
