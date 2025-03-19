// src/components/Footer.js
"use client"
import Image from "next/image";
import home from "../assets/home.png";
import search from "../assets/search.png";
import kalender from "../assets/kalender.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({role}) {
  const path = usePathname()

    if (role === undefined) {
        role = ""
    }
  return (
    <footer className="fixed bottom-0 w-full h-[2.5em] flex justify-around bg-white p-2">
    
      <Link href="/aktivites">
      <Image src={home} width={22} height={20} alt="home" className={path === "/aktivites" ? "bg-[#E1A1E9] rounded-full" : ""}/>
      </Link>
      <Link href="/search">
      <Image src={search} width={22} height={20} alt="search" className={path === "/search" ? "bg-[#E1A1E9] rounded-full" : ""}  />
      </Link>
      {role.value === "instructor" || "" ? <Link href="/kalender/instructor">
      <Image src={kalender} width={22} height={20} className={path === "/kalender/instructor" ? "bg-[#E1A1E9] rounded-full" : ""} alt="link til kalender siden" />
      </Link> :
      <Link href="/kalender">
      <Image src={kalender} width={22} height={20} className={path === "/kalender" ? "bg-[#E1A1E9] rounded-full" : ""} alt="kalender" />
      </Link>}
    </footer>
  );
}
