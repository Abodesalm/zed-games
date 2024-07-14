
import axios from "axios";
import Card from "@/components/Card";
export default function Container() {


  return (
    <div className="pad min-h-[70vh] w-full flex justify-between items-center flex-wrap space-y-2 ">
      {
        axios({method:'get',url:'http://127.0.0.1:8000/api/v1/games'}).then(res =>
        res.data.data.games.map((game)=>{
          return <Card name={game.name} id={game.id} key={game.id} />})).catch(err=><div>{err.cause}</div>)
      }
    </div>
  )
}



