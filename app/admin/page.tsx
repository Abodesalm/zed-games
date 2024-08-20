"use client";
import axios from "axios";
import { api } from "@/public/data";
import { ReactNode, useState } from "react";
import Heading from "@/components/Heading";

export default function Page() {
  const [name, setName] = useState<Number | String>();
  const [studio, setStudio] = useState<Number | String>();
  const [desc, setDesc] = useState<Number | String>();
  const [release, setRelease] = useState<Number | String>();
  const [genres, setGenres] = useState<String[]>();
  const [platforms, setPlatforms] = useState<String[]>();
  const [series, setSeries] = useState<Number | String>();
  const [price, setPrice] = useState<Number | String>();
  const [rank, setRank] = useState<Number | String>();

  const [myStory, setMyStory] = useState<Number | String>();
  const [myBeauty, setMyBeauty] = useState<Number | String>();
  const [myGameplay, setMyGameplay] = useState<Number | String>();
  const [myTotal, setMyTotal] = useState<Number | String>();
  const [myReview, setMyReview] = useState<Number | String>();

  const [minCPU, setMinCPU] = useState<Number | String>();
  const [minGPU, setMinGPU] = useState<Number | String>();
  const [minRAM, setMinRAM] = useState<Number | String>();
  const [minVRAM, setMinVRAM] = useState<Number | String>();
  const [recCPU, setRecCPU] = useState<Number | String>();
  const [recGPU, setRecGPU] = useState<Number | String>();
  const [recRAM, setRecRAM] = useState<Number | String>();
  const [recVRAM, setRecVRAM] = useState<Number | String>();
  const [storage, setStorage] = useState<Number | String>();

  const [error, setError] = useState<ReactNode>();

  const data = {
    name: name,
    studio: studio,
    desc: desc,
    release: release,
    genres: genres,
    platforms: platforms,
    series: series,
    price: price,
    rank: rank,
    rates: {
      myStory: myStory,
      myBeauty: myBeauty,
      myGameplay: myGameplay,
      myTotal: myTotal,
      myReview: myReview,
    },
    requirements: {
      minCPU: minCPU,
      minGPU: minGPU,
      minRAM: minRAM,
      minVRAM: minVRAM,
      recCPU: recCPU,
      recGPU: recGPU,
      recRAM: recRAM,
      recVRAM: recVRAM,
      storage: storage,
    },
  };

  const res = (e) => {
    setError(<div className="loader text-accent"></div>);
    e.preventDefault();
    axios
      .post(`${api}/games`, data)
      .then((res) =>
        res.status === 201 ? setError("Created !") : setError("Error")
      )
      .catch((err) => setError(err.response.data.message));
  };
  /*   const res = (e)=>{
    e.preventDefault()
    fetch(`${api}/games`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{"Content-Type":"application/json"},
      mode:"no-cors"
    }).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.error(err))
  } */

  return (
    <>
      <form className="pad flex flex-col gap-4 text-center " onSubmit={res}>
        <p className={error === "Created !" ? "text-accentt" : "text-red-600"}>
          {error}
        </p>
        <div className="flex flex-row md:flex-col justify-between items-start">
          <div className="flex flex-col justify-center items-start gap-4">
            <Heading title="infos" clas="input-headings" />
            <input
              className="input"
              placeholder="Name"
              minLength={2}
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="input"
              placeholder="Studio"
              type="text"
              onChange={(e) => setStudio(e.target.value)}
            />
            <textarea
              className="input"
              cols={34}
              rows={4}
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <input
              className="input"
              placeholder="Series"
              type="text"
              onChange={(e) => setSeries(e.target.value)}
            />
            <input
              className="input w-[300px]"
              placeholder="Genres"
              type="text"
              onChange={(e) => setGenres(e.target.value.split(","))}
            />
            <input
              className="input w-[300px]"
              placeholder="Platforms"
              type="text"
              onChange={(e) => setPlatforms(e.target.value.split(","))}
            />
            <input
              className="input w-[110px]"
              placeholder="Release"
              type="number"
              onChange={(e) => setRelease(e.target.value)}
            />
            <input
              className="input w-[110px]"
              placeholder="Price"
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              step={0.1}
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-4 w-[30%]">
            <Heading title="requirements" clas="input-headings" />
            <input
              className="input w-[320px]"
              placeholder="min CPU"
              type="text"
              onChange={(e) => setMinCPU(e.target.value)}
            />
            <input
              className="input w-[320px]"
              placeholder="min GPU"
              type="text"
              onChange={(e) => setMinGPU(e.target.value)}
            />
            <input
              className="input w-[140px]"
              placeholder="min RAM"
              type="number"
              onChange={(e) => setMinRAM(e.target.value)}
              step={0.1}
            />
            <input
              className="input w-[140px]"
              placeholder="min VRAM"
              type="number"
              onChange={(e) => setMinVRAM(e.target.value)}
              step={0.1}
            />

            <input
              className="input w-[320px] mt-4"
              placeholder="rec CPU"
              type="text"
              onChange={(e) => setRecCPU(e.target.value)}
            />
            <input
              className="input w-[320px]"
              placeholder="rec GPU"
              type="text"
              onChange={(e) => setRecGPU(e.target.value)}
            />
            <input
              className="input w-[140px]"
              placeholder="rec RAM"
              type="number"
              onChange={(e) => setRecRAM(e.target.value)}
              step={0.1}
            />
            <input
              className="input w-[140px]"
              placeholder="rec VRAM"
              type="number"
              onChange={(e) => setRecVRAM(e.target.value)}
              step={0.1}
            />

            <input
              className="input w-[140px] mt-4"
              placeholder="Storage"
              type="number"
              onChange={(e) => setStorage(e.target.value)}
              required
              step={0.1}
            />
          </div>

          <div className="flex flex-col justify-center items-start gap-4 w-[20%]">
            <Heading title="rates" clas="input-headings" />
            <input
              className="input w-[140px]"
              min={0}
              max={100}
              placeholder="My Story"
              type="number"
              onChange={(e) => setMyStory(e.target.value)}
            />
            <input
              className="input w-[140px]"
              min={0}
              max={100}
              placeholder="My Beauty"
              type="number"
              onChange={(e) => setMyBeauty(e.target.value)}
            />
            <input
              className="input w-[140px]"
              min={0}
              max={100}
              placeholder="My Gameplay"
              type="number"
              onChange={(e) => setMyGameplay(e.target.value)}
            />
            <input
              className="input w-[140px]"
              min={0}
              max={100}
              placeholder="My Total"
              type="number"
              onChange={(e) => setMyTotal(e.target.value)}
            />
            <input
              className="input w-[200px]"
              placeholder="My Review"
              type="text"
              onChange={(e) => setMyReview(e.target.value)}
            />
            <input
              className="input w-[180px]"
              placeholder="The Rank"
              type="text"
              onChange={(e) => setRank(e.target.value)}
            />

            <label htmlFor="fileUpload" className="input btn-hover">
              upload image
            </label>
            <input className="hidden" id="fileUpload" type="file" />
          </div>
        </div>

        <input
          className="input self-center btn-hover"
          type="submit"
          value="add"
        />
      </form>
    </>
  );
}
