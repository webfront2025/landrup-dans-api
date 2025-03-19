// src/actions/login.jsx
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export default async function Login(prevState, formData) {
	const username = formData.get("username")
	const password = formData.get("password")

	const schema = z.object({
		username: z.string().min(1, { message: "Du skal udfylde et brugernavn" }),
		password: z.string().min(1, { message: "Du skal udfylde et password" })
		// username: z.string().min(1, { message: "Du skal udfylde et brugernavn" }).email({message:"udfylde email"}),
	})

	const validate = schema.safeParse({ username, password })

	if (!validate.success) {
		return {
			formData: { username, password },
			errors: validate.error.format()
		}
	}

	try {
		const response = await fetch("http://localhost:4000/auth/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username, password })
		})

		if (response.status === 400) {
			return {
				formData: { username, password },
				error: "Forkert brugernavn eller adgangskode"
			}
		}

		const data = await response.json()

		const cookieStore = await cookies()
		cookieStore.set("landrup_token", data.token)
		cookieStore.set("landrup_userid", data.userId)
		cookieStore.set("landrup_role", data.role)

	} catch (error) {
		throw new Error(error)
	}
	const cookieStore = await cookies()
    const role = cookieStore.get("landrup_role")
	if (role.value === "instructor") {
        redirect("/kalender/instructor")
    }else {
        redirect("/kalender")
    }
}


