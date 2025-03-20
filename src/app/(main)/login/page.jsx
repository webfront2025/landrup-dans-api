// src/app/(main)/login/page.jsx
// import Login from "@/actions/login";
import LoginForm from "@/components/login-form";
import Image from "next/image";
import Rectangle from "../../../assets/Rectangle.png";
import Link from "next/link";
import { Triangle } from 'lucide-react';
export default async function Login() {
	return (
		
       
		<main className=" bg-[url(/splash-image.jpg)] relative h-screen flex items-center  justify-center bg-cover bg-center ">    
		 <div className="absolute w-full h-full bg-opacity-90  -translate-x mb-10"> 
		<Link className="absolute top-[2rem] z-[99] w-[90%]" href="/aktivites">
		<Triangle size={20} fill="#f4bde7" className=" rotate-[270deg] w-[2.5rem] h-[2.5rem] text-[#5E2E53]" />
	    </Link>
		<Image className="absolute z-[1]" src={Rectangle}  alt="rectangle" />	
		</div> 

			{/* <h1>Log ind</h1> */}
			<LoginForm />
            </main>
		
	)
}