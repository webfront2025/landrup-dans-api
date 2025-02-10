import Image from "next/image";
import home from "../assets/home.png"
import search from "../assets/search.png"
import folder from "../assets/folder.png"
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-[2em] flex justify-around bg-white p-2">
        {/* <div className="flex justify-around">  */}
      {/* <Link href="/categories"> */}
      <Image src={home} width={22} height={20} alt="home" />
      {/* </Link> */}
      {/* <Link href="/music"> */}
        <Image src={search} width={22} height={20} alt="search" />
      {/* </Link> */}
      {/* <Image className="absolute bg-orange-500" src={wifi} width={22} height={20} alt="wifi" /> */}
      <Image src={folder} width={22} height={20} alt="folder" />
      {/* </div> */}
    </footer>
  );
}