import Genre from "@/components/Genre";
import { api, imagesAPI } from "@/public/data";
import Image from "next/image";
import { BiCalendar, BiMoney, BiDesktop } from "react-icons/bi";

const pricing = (p) => {
  if (p === 0) return <p>Free</p>;
  else if (!p) return <p>unknown !</p>;
  else return <p>{p}$</p>;
};

export default function GameInfo({
  name,
  desc,
  studio,
  release,
  genres,
  series,
  price,
  platforms,
  photo,
}) {
  return (
    <div className="min-h-[340px] flex flex-row items-center md:items-start md:mt-4 gap-6">
      <div className="">
        <Image
          src={`${imagesAPI}/${photo}`}
          alt="game poster image"
          width={200}
          height={325}
          className="h-[325px] w-[200px] md:h-[243.75px] md:w-[150px] rounded-[10px] bg-gray-500"
        ></Image>
      </div>
      <div className=" space-y-2 flex flex-col justify-between">
        <div className="text-[24px] md:text-[20px] capitalize">{name}</div>
        <div className="max-h-[100px] w-[380px] md:w-[200px] p-1 text-[14px] bg-bglight dark:bg-darker rounded-[5px]">
          {desc}.
        </div>
        <div className="text-[15px] flex flex-row items-center gap-2 capitalize">
          {" "}
          <BiDesktop className="text-accentt dark:text-accent text-[18px]" />{" "}
          {studio}
          {!studio && <p>unknown !</p>}
        </div>
        <div className="text-[15px] flex flex-row items-center gap-2">
          {" "}
          <BiCalendar className="text-accentt dark:text-accent text-[18px]" />{" "}
          {release}
          {!release && <p>unknown !</p>}
        </div>
        <div className="text-[15px] flex flex-row items-center gap-2">
          {" "}
          <BiMoney className="text-accentt dark:text-accent text-[18px]" />{" "}
          {pricing(price)}
        </div>
        <div className="flex flex-row gap-3">
          {genres.map((el) => {
            return <Genre key={el} title={el} />;
          })}
        </div>
        <div className="capitalize">
          {series}{" "}
          {series && <p className="text-[14px] inline lowercase">series.</p>}
        </div>
        <div className="space-x-4">
          Platforms :{" "}
          {platforms
            ? platforms.map((el) => {
                return (
                  <p className="inline" key={el}>
                    {el}
                  </p>
                );
              })
            : "unknown !"}
        </div>
      </div>
    </div>
  );
}

// Name , Desc , Studio , Release , Genres , Series , Price
