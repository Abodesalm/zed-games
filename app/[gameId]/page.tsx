import Heading from "@/components/Heading";
import { api } from "@/public/data";
import GameInfo from "@/sections/GameInfo";
import MyRates from "@/sections/MyRates";
import Requirements from "@/sections/Requirements";
import Head from "next/head";

export default async function Game({ params }) {
  const endPoint = `${api}/games/${params.gameId}`;
  const game = await fetch(endPoint, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => data.data.data);
  const req = game.requirements;
  const rates = game.rates;

  return (
    <>
      <Head>
        <title>{`${game.name} | Zed Games`}</title>
        <meta name="description" content={`${game.desc} | Zed Games`} />
      </Head>
      <div className="pad">
        <GameInfo
          name={game.name}
          desc={game.desc}
          studio={game.studio}
          release={game.release}
          genres={game.genres}
          series={game.series}
          price={game.price}
          platforms={game.platforms}
          photo={game.photo}
        />
        <Heading title="requirements" clas="mt-4" />
        <Requirements
          minCPU={req.minCPU}
          minGPU={req.minGPU}
          minRAM={req.minRAM}
          minVRAM={req.minVRAM}
          recCPU={req.recCPU}
          recGPU={req.recGPU}
          recRAM={req.recRAM}
          recVRAM={req.recVRAM}
          storage={req.storage}
        />
        <Heading title="my rates" clas="mt-8" />
        <MyRates
          myBeauty={rates.myBeauty}
          myGameplay={rates.myGameplay}
          myStory={rates.myStory}
          myTotal={rates.myTotal}
          myReview={rates.myReview}
          rank={game.rank}
        />
      </div>
    </>
  );
}

// Name , Desc , Studio , Release , Genres , Series , Price
// minCPU , minGPU , minRAM , minVRAM , recCPU , recGPU , recRAM , recVRAM , storage
// MyBeauty , MyGameplay , MyStory , MyTotal , MyReview , Rank
