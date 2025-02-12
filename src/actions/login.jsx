// src/actions/login.jsx
"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export default async function Login(prevState, formData) {
	const username = formData.get("identifier")
	const password = formData.get("password")

	const schema = z.object({
		username: z.string().min(1, { message: "Du skal udfylde en email" }).email({ message: "Ugyldig email" }),
		password: z.string().min(1, { message: "Du skal udfylde et password" })
	})

	const validate = schema.safeParse({
		username,
		password
	})

	if (!validate.success) {
		return {
			formData: {
				username,
				password
			},
			errors: validate.error.format()
		}
	}

	try {
		const response = await fetch("http://localhost:4000/auth/token", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				username,
				password
			})
		})

		if (response.status === 400) { // Bad request
			return {
				formData: {
					username,
					password
				},
				error: "Forkert email eller password"
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
	redirect("/")
}
