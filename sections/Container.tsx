
import axios from "axios";
import Card from "@/components/Card";
import { api } from "@/public/data";

export default async function Container() {
  const games = await fetch(`${api}/games`).then(res => res.json()).then(data=>data.data.data)

  return (
    <div className="pad min-h-[70vh] w-full flex justify-between items-center flex-wrap space-y-2 ">
      {
        games.map((game)=>{
          return <Card name={game.name} id={game.id} key={game.id} />})
        /* axios({method:'get',url:`${api}/api/v1/games`}).then(res =>
        res.data.data.data.map((game)=>{
          return <Card name={game.name} id={game.id} key={game.id} />})).catch(err=><div>{err.cause}</div>) */
      }
    </div>
  )
}



