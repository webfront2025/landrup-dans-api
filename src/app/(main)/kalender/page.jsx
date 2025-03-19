// // src/app/(main)/search/kalender.jsx

// import Footer from "@/components/Footer";
// import { serverFetch } from "@/lib/server-fetch";
// import { cookies } from "next/headers";
// import KalenderCart from "@/components/KalenderCart";

// export default async function kalenderPage() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("landrup_token");
//   const userId = cookieStore.get("landrup_userid");
//   try {
//     const res = await fetch(
//       `http://localhost:4000/api/v1/users/${userId.value}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer " + token.value,
//         },
//       }
//     );

//     const data = await res.json();
//     console.log("result", data);

//     return (
//       <>
//         <div className="w-full h-screen bg-[#5E2E53]">
//           <h1 className="text-white --font-sans: ui-sans-serif, system-ui, sans-serif,ubuntu text-[36px] ml-12">
//             kalender
//           </h1>
//           <ul>
//             {data.activities.map((aktiv) => (
//               {isInstructor ?  :<KalenderCart
//                 key={aktiv.id}
//                 aktivites={aktiv}
//                 // isInstructor={data.role === "instructor"}
//               />}
//               // <KalenderCart
//               //   key={aktiv.id}
//               //   aktivites={aktiv}
//               //   // isInstructor={data.role === "instructor"}
//               // />
//             ))}
//             {/* <KalenderCart  aktivites={data} /> */}
//           </ul>
//         </div>
//         <Footer />
//       </>
//     );
//   } catch (err) {
//     console.error(err);
//   }
// }
// '''''''''''''''''''''''''''''''''''''''''''''''''''18-3-2025  22:28 **********************************
// import Footer from "@/components/Footer";
// import { cookies } from "next/headers";
// import KalenderCart from "@/components/KalenderCart";

// export default async function kalenderPage() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("landrup_token");
//   const userId = cookieStore.get("landrup_userid");

//   if (!token || !userId) {
//     console.error("Missing authentication token or user ID.");
//     return <p className="text-white ml-12">Authentication error. Please log in.</p>;
//   }

//   try {
//     // Fetch instructor data
//     const userRes = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token.value}`,
//       },
//     });

//     const userText = await userRes.text();
//     console.log("Raw User API Response:", userText);

//     let userData;
//     try {
//       userData = JSON.parse(userText);
//     } catch (error) {
//       throw new Error("User API did not return valid JSON.");
//     }

//     console.log("Parsed User Data:", userData);

//     const isInstructor = userData.role === "instructor";
//     const instructorName = `${userData.firstname} ${userData.lastname}`;
//     let filteredStudents = [];

//     // If user is an instructor, fetch students
//     if (isInstructor) {
//       console.log(`Instructor detected: ${instructorName}. Fetching students...`);

//       try {
//         const studentsRes = await fetch(`http://localhost:4000/api/v1/users`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token.value}`,
//           },
//         });

//         const studentsText = await studentsRes.text();
//         console.log("Raw Students API Response:", studentsText);

//         if (!studentsRes.ok) {
//           throw new Error(`Failed to fetch students. Status: ${studentsRes.status}`);
//         }

//         const allUsers = JSON.parse(studentsText);
//         console.log("Parsed Students Data:", allUsers);

//         // Filter only students
//         filteredStudents = allUsers.filter(user => user.role === "student");

//         if (filteredStudents.length === 0) {
//           console.log("No students found.");
//         }
//       } catch (error) {
//         console.error("Error fetching students:", error);
//       }
//     }

//     return (
//       <>
//         <div className="w-full h-screen bg-[#5E2E53]">
//           <h1 className="text-white text-[36px] ml-12">Kalender</h1>
//           <h2 className="text-white ml-12">Welcome, {instructorName}</h2> {/* Show instructor's name */}
//           <ul>
//             {isInstructor
//               ? filteredStudents.map((student) =>
//                   student.activities.map((aktiv) => (
//                     <KalenderCart key={aktiv.id} aktivites={aktiv} />
//                   ))
//                 )
//               : userData.activities.map((aktiv) => (
//                   <KalenderCart key={aktiv.id} aktivites={aktiv} />
//                 ))}
//           </ul>
//         </div>
//         <Footer />
//       </>
//     );
//   } catch (err) {
//     console.error("Error fetching data:", err);
//     return <p className="text-white ml-12">Failed to load data. Please check API.</p>;
//   }
// }


// src/app/(main)/Kalender/page.jsx

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { cookies } from "next/headers";

export default async function Kalender(){

    const cookieStore = await cookies()
    const token = cookieStore.get("landrup_token")
    const userid = cookieStore.get("landrup_userid")
    const role = cookieStore.get("landrup_role")

    console.log("cookie return", role);
    

    const response = await fetch(`http://localhost:4000/api/v1/users/${userid.value}`, {
                "method": "GET",
                "headers": {
                "Authorization": `Bearer ${token.value}`

            }
        })
    const data = await response.json()
    const activityData = data.activities

    console.log("fetch kalender data.name", activityData?.[0]?.name);
    console.log("fetch kalender data", data);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem] mt-2">
                {activityData.map((item) => <KalenderCard key={item.id} activity={item} />)}
            </main>
             {/* <Footer /> */}
        </>
    )
}





