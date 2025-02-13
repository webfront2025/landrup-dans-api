// src/app/(main)/search/kalender.jsx


import Footer from "@/components/Footer"
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import KalenderCart from "@/components/KalenderCart";
 
export default async function kalenderPage() {
     const cookieStore = await cookies();
        const token = cookieStore.get("landrup_token");
        const userId = cookieStore.get("landrup_userid");
try {
        const res = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
            "method": "GET",
            "headers": {
              "Authorization":  "Bearer " + token.value,
            }
        });
        
        const data = await res.json()
        console.log("result", data);
 
        return (
            <>
              <div className="w-full h-screen bg-[#5E2E53]">
                <h1 className="text-white --font-sans: ui-sans-serif, system-ui, sans-serif,ubuntu text-[36px] ml-12">kalender</h1>
             <ul>
                       {data.activities.map((aktiv) => (
                         <KalenderCart key={aktiv.id} aktivites={aktiv} />
                       ))}
                       {/* <KalenderCart  aktivites={data} /> */}
                     </ul>
             </div>
              <Footer />
            </>
          );
    } catch(err) {
 
        console.error(err)
    }
   
}
