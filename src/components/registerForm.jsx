"use client"




import RegisterAction from "@/actions/registerActions"
import Link from "next/link";
import { useActionState, useEffect } from "react";



export default function RegisterForm() {

    const [formState, formAction] = useActionState(RegisterAction, null)
    useEffect(()=>{
        console.log("formState", formState);
        
    },[formState])



return (
    <>
        <form className="flex flex-col justify-center items-center " noValidate action={formAction} >
        <label className="flex flex-col ">
            <h2 className="text-[#EAEAEA] text-[2.5rem] mb-2">Registrere</h2>


            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.name?._errors[0]}</span>

            <input 
            defaultValue={formState?.formData?.name} 
            className="border-2 h-[2.5rem] pl-2 mb-3 w-[17rem] bg-[#ffffffadf]" 
            name="name" 
            type="text"
            placeholder="Navn"

            />
            
        
            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.lastname?._errors[0]}</span>
            
                <input 
                defaultValue={formState?.formData?.lastname} 
                className="border-2 h-[2.5rem] pl-2 w-[17rem] mb-3 bg-[#ffffffadf]" 
                name="lastname" 
                type="text"
                placeholder="Efternavn"

                />
<span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.age?._errors[0]}</span>
            
                <input 
                defaultValue={formState?.formData?.age} 
                className="border-2 h-[2.5rem] pl-2 w-[17rem] mb-3 bg-[#ffffffadf]" 
                name="age" 
                type="number"
                placeholder="Alder"

                />

            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.password?._errors[0]}</span>

            <input 
            defaultValue={formState?.formData?.username} 
            className="border-2 h-[2.5rem] pl-2 mb-3 w-[17rem] bg-[#ffffffadf]" 
            name="username" 
            type="text"
            placeholder="brugernavn"

            />
            
        
            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.password?._errors[0]}</span>
            
                <input 
                defaultValue={formState?.formData?.password} 
                className="border-2 h-[2.5rem] pl-2 w-[17rem] mb-3 bg-[#ffffffadf]" 
                name="password" 
                type="password"
                placeholder="adgangskode"

                />

        </label>
        <button type="submit" className="text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem]" > Registrere bruger </button>
        <Link href="/login" className="text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] my-2">Tilbage til login</Link>

    </form>
    </>
    );
}