import { api } from "@/public/data";
import Container from "@/sections/Container";
import Search from "@/sections/Search";

export default function Home({searchParams}) {
  return (
    <div className="min-h-[70vh]">
      <Search/>
      <Container endpoint={`${api}/games`} searchParams={searchParams} pageUrl={'/'} method='?'/>
    </div>
  );
}
