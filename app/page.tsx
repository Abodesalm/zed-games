import { api } from "@/public/data";
import Container from "@/sections/Container";

export default function Home({ searchParams }) {
  return (
    <div className="min-h-[70vh]">
      <Container endpoint={`${api}/games`} sp={searchParams} pageUrl={"/"} />
    </div>
  );
}
