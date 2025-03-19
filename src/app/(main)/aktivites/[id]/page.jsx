// src/app/(main)/aktivites/[id]/page.jsx
import { serverFetch } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import Image from "next/image";
import RegisterButton from "@/components/RegisterButton";
import Footer from "@/components/Footer";

export default async function generateMetadata({ params }) {
	const aktId = (await params).id
// console.log(aktId);
  
  // Fetch activity details
  const aktivites = await serverFetch(`http://localhost:4000/api/v1/activities/${aktId}`);
  // console.log(aktivites);
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userid = cookieStore.get("landrup_userid");
  const role = cookieStore.get("landrup_role");

  const minAge = aktivites.minAge;
  const maxAge = aktivites.maxAge;
  const date = aktivites.weekday;
  const name = aktivites.name;

return (
    <>
    <main className="">
      {/* Activity Image with Tilmeld Button */}
      <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
        <Image 
          src={aktivites.asset.url}
          width={600}
          height={300}
          className="w-full h-full object-cover rounded-lg"
          alt={aktivites.name}
        />
        {/* <button className="absolute bottom-4 w-[11em] left-1/3 transform -translate-x-1/2b bg-[#5E2E53] text-white py-2 px-5 rounded-lg">
          Tilmeld</button> */}
          {userid && token ? <RegisterButton name={name} date={date} maxAge={maxAge} minAge={minAge} 
          role={role.value} userid={userid.value} token={token.value} id={aktivites.id} /> :
          null}
      </div>

      {/* Activity Details */}
      <div className="mt-5 p-3 text-white ">
      <h2 className="text-xl font-bold">{aktivites.name}</h2>
          <p className="text-l">{aktivites.minAge}-{aktivites.maxAge} år</p>
          <p className="text-l">{aktivites.weekday} kl {aktivites.time}</p>
          <span className="mt-2 text-l">{aktivites.description}</span>
      </div>
    </main>
     {/* <Footer /> */}
     </>
  );
}
// // src/app/(main)/aktivites/[id]/page.jsx
// import { serverFetch } from "@/lib/server-fetch";
// import { cookies } from "next/headers";
// import Image from "next/image";
// import RegisterButton from "@/components/RegisterButton";
// import Footer from "@/components/Footer";

// export default async function generateMetadata({ params }) {
//   const  {aktId}  = await params?.id;
//   // const aktId = await params?.id;
//   // console.log(aktId);

//   // Fetch activity details
//   const aktivites = await serverFetch(`http://localhost:4000/api/v1/activities/${aktId}`);
//   // console.log("Details:", aktivites);

//   const cookieStore = await cookies();
//   const token = cookieStore.get("landrup_token");
//   const userid = cookieStore.get("landrup_userid");
//   const role = cookieStore.get("landrup_role");

//   const minAge = aktivites.minAge;
//   const maxAge = aktivites.maxAge;
//   const date = aktivites.weekday;
//   const name = aktivites.name;
//   return (
//     <>
//       <main className="">
//         {/* Activity Image with Tilmeld Button */}
//         <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
//           <Image
//             src={aktivites.asset.url}
//             width={600}
//             height={300}
//             className="w-full h-full object-cover rounded-lg"
//             alt={aktivites.name}
//           />
//           {userid && token ? <RegisterButton name={name} date={date} maxAge={maxAge} minAge={minAge} role={role.value} userid={userid.value} token={token.value} id={data.id} /> :
//           null}
//         </div>

//         {/* Activity Details */}
//         <div className="mt-5 p-3 text-white ">
//           <h2 className="text-xl font-bold">{aktivites.name}</h2>
//           <span className="text-l">
//             {aktivites.minAge}-{aktivites.maxAge} år
//           </span>
//           <span className="text-l">{aktivites.weekday} kl {aktivites.time}</span>
//           <span className="mt-2 text-l">{aktivites.description}</span>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


// import { serverFetch } from "@/lib/server-fetch";
// import { cookies } from "next/headers";
// import Image from "next/image";
// import Footer from "@/components/Footer";
// import RegisterButton from "@/components/RegisterButton"; // Import button

// export default async function ActivityDetails({ params }) {
//   const aktId = await params?.id; //  Destructure params properly

//   //  Await cookies() before accessing values
//   const userCookies = await cookies();
// console.log(" Cookies:", userCookies);
//   const userId = userCookies.get("landrup_userid")?.value || null;
//   const role = userCookies.get("landrup_role")?.value || null;
//   const userAge = Number(userCookies.get("landrup_age")?.value) || null; // Ensure it's a number
 
//   console.log("User ID:", userId);
//   console.log("User Age:", userAge);
//   console.log("User Role:", role);
//   //  Fetch activity details
//   const activity = await serverFetch(`http://localhost:4000/api/v1/activities/${aktId}`);
//   console.log(" Fetching activity with ID:", aktId);
//   console.log(" Activity response:", activity);
  
//   // if (!activity) return <p>Fejl ved hentning af aktiviteten.</p>; // Handle missing data
//   // console.log("Activity not found!");
//   //  Fetch user activities
//   const userActivities = userId
//     ? await serverFetch(`http://localhost:4000/api/v1/users/${userId}`)
//     : [];
//     // const  userActivitiesId = userCookies.get("landrup_userid")?.value || null;
//     console.log(userActivities);
    
//   // //  Check conditions
//   // const isRegistered = userActivities.some(a => a.id === activity.id);
//   // const isAgeRestricted = userAge < activity.minAge || userAge > activity.maxAge;
//   // console.log(" isRegistered:", isRegistered);
//   // console.log(" isAgeRestricted:", isAgeRestricted);

//   return (
//     <>
//       <div className="p-5">
//         {/* Activity Image */}
//         <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
//           <Image 
//             src={activity.asset.url}
//             width={600}
//             height={300}
//             className="w-full h-full object-cover rounded-lg"
//             alt={activity.name}
//           />
//         </div>

//         {/* Activity Details */}
//         <div className="mt-5 p-3 text-white">
//           <h1 className="text-xl font-bold">{activity.name}</h1>
//           <p>{activity.weekday} - {activity.time}</p>
//           <p className="mt-2">{activity.description}</p>
//           <p>{activity.minAge} - {activity.maxAge} år</p>

//           {/*  Show button if user is logged in and within age limit */}
//           {/* {userId && !isAgeRestricted && (
//             <RegisterButton activityId={activity.id} isRegistered={isRegistered} />
//           )} */}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }





// import { serverFetch } from "@/lib/server-fetch";
// import { cookies } from "next/headers";
// import Image from "next/image";

// export default async function ActivityPage({ params }) {
//   const { id } = params;
//   const cookieStore = cookies();
//   const token = cookieStore.get("landrup_token")?.value;
//   const userId = cookieStore.get("landrup_userid")?.value;

//   // Hent aktivitetens detaljer
//   const activity = await serverFetch(`http://localhost:4000/api/v1/activities/${id}`);

//   // Hent brugerdata (hvis logget ind)
//   let user = null;
//   let enrolledActivities = [];
  
//   if (token) {
//     user = await serverFetch(`http://localhost:4000/api/v1/users/${userId}`);
//     enrolledActivities = await serverFetch(`http://localhost:4000/api/v1/users/${userId}/activities`);
//   }

//   // Tjek om brugeren er tilmeldt denne aktivitet
//   const isEnrolled = enrolledActivities.some(a => a.id === activity.id);

//   // Tjek aldersbegrænsning
//   const userAge = user?.age ?? 0;
//   const withinAgeLimit = userAge >= activity.minAge && userAge <= activity.maxAge;

//   // Tjek om brugeren allerede har en aktivitet på samme ugedag
//   const hasConflict = enrolledActivities.some(a => a.weekday === activity.weekday);

//   // Håndtering af tilmeld/forlad
//   async function handleEnrollment() {
//     const method = isEnrolled ? "DELETE" : "POST";
//     await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
//       method,
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     window.location.reload(); // Opdater siden for at reflektere ændringen
//   }

//   return (
//     <div className="p-6">
//       <div className="relative w-full h-[20em] rounded-lg overflow-hidden">
//         <Image 
//           src={activity.asset.url}
//           width={600}
//           height={300}
//           className="w-full h-full object-cover rounded-lg"
//           alt={activity.name}
//         />
//         {token && withinAgeLimit && !hasConflict && (
//           <button 
//             onClick={handleEnrollment}
//             className="absolute bottom-4 w-[11em] left-1/3 transform -translate-x-1/2 bg-[#5E2E53] text-white py-2 px-5 rounded-lg"
//           >
//             {isEnrolled ? "Forlad" : "Tilmeld"}
//           </button>
//         )}
//       </div>

//       <div className="mt-5 p-3 text-white">
//         <h1 className="text-xl font-bold">{activity.name}</h1>
//         <p className="">{activity.weekday} - {activity.time}</p>
//         <p className="">{activity.minAge}-{activity.maxAge} år</p>
//         <p className="mt-2">{activity.description}</p>

//         {!withinAgeLimit && <p className="text-red-500">Du opfylder ikke alderskravet.</p>}
//         {hasConflict && <p className="text-red-500">Du har allerede en aktivitet på denne ugedag.</p>}
//       </div>
//     </div>
//   );
// }
