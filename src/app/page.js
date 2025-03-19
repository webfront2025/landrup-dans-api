// src/app/page.js
"use client";
import Image from "next/image";
import logo from "../assets/Logo.png"
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
// import "./global.css";

const roboto = Roboto({
  weight:'400',
  subsets: ['latin']
})
export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowButton(true), 1500);
  }, []);

return(
 
<div className="bg-[url(/splash-image.jpg)] bg-cover bg-center bg-no-repeat h-screen overflow-hidden">

<Image src={logo} width={300} height={300}   alt="logo" className="absolute bottom-[15em]"/>
<div className="flex justify-center">
<Link href="/aktivites" className="flex justify-center"> 
<button className={`rounded-lg bg-[#5E2E53] absolute bottom-[4em] w-40 h-10 
              transition-opacity duration-500 ease-in ${showButton ? "opacity-100" : "opacity-0"}`}
          >kom i gang</button>
</Link>
</div>
  </div>
)
}
