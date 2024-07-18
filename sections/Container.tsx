
import axios from "axios";
import Card from "@/components/Card";
import { api } from "@/public/data";
import Pageination from "@/components/Pageination";


export default async function Container({ endpoint, searchParams, pageUrl, method }) {
  const page = searchParams.page || 1;
  const pageStr = `${method}page=${page}`
  const data = await fetch(`${endpoint}${pageStr}`,{cache:"no-store"}).then(res => res.json()).then(data => data)
  return (
    <>
      <div className="pad min-h-[70vh] w-full flex justify-between items-center flex-wrap gap-8 ">
        {
          data.data.data.map((game) => {
            return <Card name={game.name} id={game.id} key={game.id} />
          })
          /* axios({method:'get',url:`${api}/api/v1/games`}).then(res =>
          res.data.data.data.map((game)=>{
            return <Card name={game.name} id={game.id} key={game.id} />})).catch(err=><div>{err.cause}</div>) */
        }
      </div>
      <Pageination url={pageUrl} results={data.results} />
    </>
  )
}



