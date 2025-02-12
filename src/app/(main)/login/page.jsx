// src/app/(main)/login/page.jsx
// import LoginForm from "@/components/login-form"
import Image from "next/image";
import logo from "../../../assets/Logo.png"
import Link from "next/link";
export default async function Login() {
	return (
		<>
        <div className="bg-[url(/splash-image.jpg)] bg-cover bg-center bg-no-repeat h-screen overflow-hidden">
        <div className="flex justify-center"></div>
			<h1>Log ind</h1>
			{/* <LoginForm /> */}
            </div>
		</>
	)
}