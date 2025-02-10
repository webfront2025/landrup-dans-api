import Image from "next/image";
import logo from "../assets/Logo.png"

export default function Home() {
return(
 
<div className="bg-[url(/splash-image.jpg)] bg-cover bg-center bg-no-repeat h-screen">

<Image src={logo} width={350} height={295} alt="logo" className="absolute bottom-[20em]"/>
<div className="flex justify-center">
<button className="rounded-lg bg-[#5E2E53] absolute bottom-[4em] w-40 h-10">kom i gang</button>
</div>
  </div>
)
}
