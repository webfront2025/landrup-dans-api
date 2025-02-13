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

import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import KalenderCart from "@/components/KalenderCart";

export default async function kalenderPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");

  try {
    // Fetch user data
    const userRes = await fetch(`http://localhost:4000/api/v1/users/${userId.value}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    // Read response as text (for debugging)
    const userText = await userRes.text();
    console.log("Raw User API Response:", userText);

    // Check if response is valid JSON
    let userData;
    try {
      userData = JSON.parse(userText);
    } catch (error) {
      throw new Error("User API did not return valid JSON.");
    }

    console.log("Parsed User Data:", userData);

    const isInstructor = userData.role === "instructor";
    let filteredStudents = [];

    if (isInstructor) {
      // Fetch all users
      const studentsRes = await fetch(`http://localhost:4000/api/v1/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      // Read response as text (for debugging)
      const studentsText = await studentsRes.text();
      console.log("Raw Students API Response:", studentsText);

      let allUsers;
      try {
        allUsers = JSON.parse(studentsText);
      } catch (error) {
        throw new Error("Students API did not return valid JSON.");
      }

      console.log("Parsed Students Data:", allUsers);

      // Filter students who are in the same class
      filteredStudents = allUsers.filter(
        (user) => user.role === "student" && user.classId === userData.classId
      );
    }

    return (
      <>
        <div className="w-full h-screen bg-[#5E2E53]">
          <h1 className="text-white text-[36px] ml-12">Kalender</h1>
          <ul>
            {isInstructor
              ? filteredStudents.map((student) =>
                  student.activities.map((aktiv) => (
                    <KalenderCart key={aktiv.id} aktivites={aktiv} />
                  ))
                )
              : userData.activities.map((aktiv) => (
                  <KalenderCart key={aktiv.id} aktivites={aktiv} />
                ))}
          </ul>
        </div>
        <Footer />
      </>
    );
  } catch (err) {
    console.error("Error fetching data:", err);
    return <p className="text-white ml-12">Failed to load data. Please check API.</p>;
  }
}





