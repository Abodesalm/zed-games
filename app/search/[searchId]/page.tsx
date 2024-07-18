import { api } from "@/public/data";
import Container from "@/sections/Container";


export default function page({searchParams, params}) {
  return (
    <Container endpoint={`${api}/games?name=${params.searchId}`} searchParams={searchParams} pageUrl={`/search/${params.searchId}`} method='&' />
  )
}
