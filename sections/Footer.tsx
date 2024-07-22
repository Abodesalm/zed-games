import Heading from "@/components/Heading";
import Link from "next/link";
import { links } from "@/public/data";
import { FaWhatsapp , FaDiscord , FaInstagram , FaFacebook , FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pad min-h-[200px] bg-bglight dark:bg-darker flex flex-row md:flex-col md:gap-4 justify-between items-center">
      <div className=" w-[14%] h-[100px] md:w-[60%] flex flex-col justify-start gap-2 md:gap-4 items-center">
        <Heading title="Zed Games"/>
        <div className="flex flex-row items-center justify-around w-full">
          <Link href={links.accounts.whatsapp} className="text-[20px] hover:text-accent" target="_blanc"> <FaWhatsapp/> </Link>
          <Link href={links.accounts.instagram} className="text-[20px] hover:text-accent" target="_blanc"> <FaInstagram/> </Link>
          <Link href={links.accounts.telegram} className="text-[20px] hover:text-accent" target="_blanc"> <FaTelegram/> </Link>
          <Link href={links.accounts.facebook} className="text-[20px] hover:text-accent" target="_blanc"> <FaFacebook/> </Link>
          <Link href={links.accounts.discord} className="text-[20px] hover:text-accent" target="_blanc"> <FaDiscord/> </Link>
        </div>
      </div>

      <div className="w-[30%] md:self-start md:ml-8 md:mb-8 h-[100px]">
        <ul className=" list-disc">
          <p className="-ml-5 text-[18px] font-medium">links</p>
          <li><Link className="hover:text-accent" href={`/`}>Home</Link></li>
          <li><Link className="hover:text-accent" href={`/about`}>About</Link></li>
          <li><Link className="hover:text-accent" href={`/?rank=diamond`}>Best Games</Link></li>
          <li><Link className="hover:text-accent" href={`/`}>Home</Link></li>
        </ul>
      </div>
{/*       <div className="w-[30%] h-[100px] bg-cyan-300">

      </div> */}
    </footer>
  )
}
