"use server"


import { redirect } from "next/navigation";
import { z } from "zod"

export default async function RegisterAction(prevState, formData){
    console.log("formData", formData);
    const username = formData.get("username")
    const password = formData.get("password")
    const name = formData.get("name")
    const lastname = formData.get("lastname")
    const age = formData.get("age")
    

    

    const schema = z.object({
        username: z.string().min(1, {message: "Udfyld feltet"}),
        password: z.string().min(1, {message: "Udfyld feltet"}),
        name: z.string().min(1, {message: "Udfyld feltet"}),
        lastname: z.string().min(1, {message: "Udfyld feltet"}),
        age: z.string().min(1, {message: "Udfyld feltet"})
    })

    const validate = schema.safeParse({
        username,
        password,
        name,
        lastname,
        age
    })

    if (!validate.success) {
        return {
            formData: {
                username,
                password,
                name,
                lastname,
                age
            },
            errors: validate.error.format()
        }
    }

    try {
            const response =  await fetch("http://localhost:4000/api/v1/users", {

                    "method": "POST",
                    "headers": {
                    "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        username: username,
                        password: password,
                        firstname: name,
                        lastname: lastname,
                        age: age,
                        role: "default",
                    })
                })
                
        
        

        if (response.status === 500) { //400 error code er bad request
            return {
                formData:{
                    username,
                    password
                },
                error: "kunne ikke oprette konto. Prøv igen"
            }
        }

        const data = await response.json()
        console.log("log in data", data);

        
        
    } catch (error) {
        throw new Error(error)
    }
    

        redirect("/login")
    
}