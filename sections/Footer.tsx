import Heading from "@/components/Heading";
import Link from "next/link";
import { api, links } from "@/public/data";
import {
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa6";

export default async function Footer() {
  const count = await fetch(`${api}/games/games-count`, { cache: "no-store" })
    .then((count) => count.json())
    .then((count) => count.data);

  return (
    <footer className="pad min-h-[200px] bg-bglight dark:bg-darker flex flex-row md:flex-col md:gap-4 justify-between items-center">
      <div className=" w-[20%] h-[100px] md:w-[60%] flex flex-col justify-start gap-2 md:gap-4 items-center">
        <Heading title="Zed Games" />
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            href={links.accounts.whatsapp}
            className="text-[20px] hover:text-accent"
            target="_blanc"
          >
            {" "}
            <FaWhatsapp />{" "}
          </Link>
          <Link
            href={links.accounts.instagram}
            className="text-[20px] hover:text-accent"
            target="_blanc"
          >
            {" "}
            <FaInstagram />{" "}
          </Link>
          <Link
            href={links.accounts.telegram}
            className="text-[20px] hover:text-accent"
            target="_blanc"
          >
            {" "}
            <FaTelegram />{" "}
          </Link>
          <Link
            href={links.accounts.facebook}
            className="text-[20px] hover:text-accent"
            target="_blanc"
          >
            {" "}
            <FaFacebook />{" "}
          </Link>
          <Link
            href={links.accounts.discord}
            className="text-[20px] hover:text-accent"
            target="_blanc"
          >
            {" "}
            <FaDiscord />{" "}
          </Link>
        </div>
      </div>

      <div className="w-[40%] md:w-[50%] md:self-start md:ml-8 md:mb-8 h-[100px]">
        <ul className=" list-disc">
          <p className="-ml-5 text-[18px] font-medium">links</p>
          <li>
            <Link className="hover:text-accent" href={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href={`/about`}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href={`/signup`}>
              Sign up
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href={`/login`}>
              Log in
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[20%] h-[100px] md:w-[90%]">
        there are <span className="text-accent">{count}</span> games
      </div>
    </footer>
  );
}
