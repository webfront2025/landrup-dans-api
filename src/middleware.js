import { NextResponse } from "next/server"

export function middleware(request) {
	//console.log("request", request.cookies.has("repe_token"))
	console.log("hej");
	

	if (!request.cookies.has("landrup_token") || !request.cookies.has("landrup_userid")  || !request.cookies.has("landrup_role")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/kalender/:path*"
}