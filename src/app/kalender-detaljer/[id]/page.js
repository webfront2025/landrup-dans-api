import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cookies } from "next/headers";
export default async function KalenderDetaljer({ params }){

    const {id} = await params

    const cookieStore = await cookies()
    const token = cookieStore.get("landrup_token")

        const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
            "method": "GET",
            "headers": {
            "Authorization": `Bearer ${token.value}`

        }
        })
        const data = await response.json()
        const userData = data.users

        console.log("fetch data instructor", data.users);
    
    return(
        <>
            <Header text={data.name}/>
            <main className="h-[82vh] px-[1.5rem] flex flex-col">
                {userData.map((item) => <span key={item.id} className="text-[#EAEAEA] text-[1.2rem]">{item.firstname} {item.lastname}</span>)}
            </main>
             {/* <Footer /> */}
        </>
    )
}