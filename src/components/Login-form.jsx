// src/components/Login-form.jsx
"use client"

import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

export default function LoginForm() {
  const [formState, formAction, isPending] = useActionState(Login, null)

  useEffect(() => {
    console.log("formState", formState)
  }, [formState])

  return (
    <form action={formAction} noValidate className="space-y-4 absolute z-40">
      <div className="z-40">
        {/* <label className="block text-white text-sm font-medium">
          Brugernavn
        </label> */}
		<h1 className="text-[40px] text-white mb-2">Log ind</h1>
        <input
          defaultValue={formState?.formData?.username}
          type="text"
          name="username"
          className="w-[90%] px-4 py-2 border border-gray-300 bg-white/20 text-gray placeholder-gray-200 focus:outline-none focus:ring-2"
          placeholder="brugernavn"
        />
        <span className="text-red-400 text-sm">{formState?.errors?.username?._errors[0]}</span>
      </div>

      <div>
        {/* <label className="block text-white text-sm font-medium">
          Adgangskode
        </label> */}
        <input
          defaultValue={formState?.formData?.password}
          type="password"
          name="password"
          className="w-full px-4 py-2  border border-gray-100  bg-white text-black placeholder-white focus:outline-none focus:ring-2"
          placeholder="adgangskode"
        />
        <span className="text-red-400 text-sm">{formState?.errors?.password?._errors[0]}</span>
      </div>

      <span className="text-red-400 block">{formState?.error}</span>

      <button disabled={isPending} type="submit"
        className=" flex justify-center w-[90%] py-2 bg-[#5E2E53] hover:bg-[#5E2E53] disabled:bg-gray-500 text-white rounded-xl text-lg font-semibold transition">
        {isPending ? "Logger ind..." : "Log ind"}
      </button>
    </form>
  )
}
