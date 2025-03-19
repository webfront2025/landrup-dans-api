
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";

export default async function Instructor(){

    const cookieStore = await cookies()
    const userid = cookieStore.get("landrup_userid")

    console.log("userid", userid);
//
    const data = await serverFetch(`http://localhost:4000/api/v1/activities`)


    const idMatcher = data.filter(element => element.instructorId == userid.value)

    console.log("sortedID", idMatcher);


    
    

    console.log("fetch data instructor", data);
    // console.log("fetch data instructor search", searchResults);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem]">
                {idMatcher.map((item) => <KalenderCard key={item.id} activity={item} />)}
            </main>
            {/* <Footer /> */}
        </>
    )
}
// // src/app/(main)/kalender/hold-oversigt/[id].jsx
// import { cookies } from "next/headers";

// export default async function Instructor({ params }) {
//   const { id } = params; // Activity ID from URL
//   const cookieStore = await cookies();
//   const token = cookieStore.get("landrup_token");

//   try {
//     const res = await fetch(`http://localhost:4000/api/v1/activities/${id}/roster/${activitiesid}`, {
//       method: "GET",
//       headers: {
//         Authorization: "Bearer " + token.value,
//       },
//     });
// console.log(res);

//     const data = await res.json();

//     return (
//       <div className="w-full h-screen bg-[#5E2E53] text-white p-5">
//         <h1 className="text-[36px]">Hold Oversigt</h1>
//         <ul>
//           {data.enrolledUsers.map((user) => (
//             <li key={user.id} className="bg-white text-black p-3 m-2 rounded">
//               {user.firstName} {user.lastName}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   } catch (err) {
//     console.error(err);
//   }
// }