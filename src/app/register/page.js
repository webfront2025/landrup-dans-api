import Image from "next/image";
import Rectangle from "../../assets/Rectangle.png"
import RegisterForm from "@/components/registerForm";



export default async function Register() {

return (
    <main className=" bg-[url(/splash-image.jpg)] relative h-screen flex items-center  justify-center bg-cover bg-center ">    
             <div className="absolute w-full h-full bg-opacity-90  -translate-x mb-10"> 
            <Image className="absolute z-[1]" src={Rectangle}  alt="rectangle" />	
            </div> 
            <div className="flex justify-center z-[99]">
            <RegisterForm  />
            </div> 
        </main>
);
}