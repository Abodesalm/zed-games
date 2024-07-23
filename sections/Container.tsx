
import axios from "axios";
import Card from "@/components/Card";
import { api } from "@/public/data";
import Pageination from "@/components/Pageination";
import Search from "./Search";


export default async function Container({ endpoint, searchParams, pageUrl }) {
  const page = searchParams.page || 1;
  const pageStr = `${searchParams.rank?'&':''}page=${page}`
  const rank = `${searchParams.rank?`rank=${searchParams.rank}`:``}`
  const searchStr = `${searchParams.search?searchParams.search:''}`
  const lastEndpoint = `${endpoint}?${rank}${pageStr}`
  const data = await fetch(lastEndpoint,{next:{revalidate:300}}).then(res => res.json()).then(data => data).catch(err=>console.log(err.response.data.message));
  //
  (function filterSearch(){
    data.data.data = data.data.data.filter((el)=>{
      return el.name.toLowerCase().includes(searchStr.toLowerCase())
    })
  })()

  return (
    <>
      <Search />
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



